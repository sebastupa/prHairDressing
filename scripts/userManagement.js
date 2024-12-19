// Detalii utilizator
$(document).on('click', '.details-btn', function() {
    const userId = $(this).data('id');
    $.get(`/users/details/${userId}`)
        .done(data => {
            $('#details-first-name').text(data.first_name);
            $('#details-last-name').text(data.last_name);
            $('#details-email').text(data.email);
            $('#details-role').text(data.role);
        })
        .fail(() => {
            alert('Eroare la încărcarea detaliilor utilizatorului');
        });
});

// Formular de editare
$(document).on('click', '.edit-btn', function() {
    const userId = $(this).data('id');
    $.get(`/users/edit/${userId}`)
        .done(data => {
            $('#editUserId').val(data.user_id);
            $('#edit-first-name').val(data.first_name);
            $('#edit-last-name').val(data.last_name);
            $('#edit-email').val(data.email);
            $('#edit-role').val(data.role);
            $('#edit-password').val(data.password_hash); // Setare parolă (dacă e necesar)
            $('#editForm').attr('action', `/users/edit/${data.user_id}`);
        })
        .fail(() => {
            alert('Eroare la încărcarea datelor utilizatorului pentru editare');
        });
});
