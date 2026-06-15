import sql from '@/app/api/utils/sql';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, nisn, previous_class, parent_name, phone_number, address } = body;

    // Basic validation
    if (!full_name || !nisn || !parent_name || !phone_number) {
      return Response.json({ error: 'Semua kolom wajib diisi' }, { status: 400 });
    }

    // Insert into database
    const result = await sql`
      INSERT INTO student_registrations (
        full_name, 
        nisn, 
        previous_class, 
        parent_name, 
        phone_number, 
        address
      ) VALUES (
        ${full_name}, 
        ${nisn}, 
        ${previous_class}, 
        ${parent_name}, 
        ${phone_number}, 
        ${address}
      )
      RETURNING id
    `;

    return Response.json({
      success: true,
      id: result[0].id,
      message: 'Pendaftaran berhasil disimpan',
    });
  } catch (error: any) {
    console.error('Registration Error:', error);

    // Check for unique constraint violation (NISN)
    if (error.message?.includes('unique constraint')) {
      return Response.json({ error: 'NISN ini sudah terdaftar dalam sistem.' }, { status: 409 });
    }

    return Response.json(
      { error: 'Gagal memproses pendaftaran. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const registrations = await sql`
      SELECT * FROM student_registrations 
      ORDER BY created_at DESC 
      LIMIT 100
    `;
    return Response.json(registrations);
  } catch (error) {
    return Response.json({ error: 'Gagal mengambil data pendaftaran' }, { status: 500 });
  }
}
