function cleanPrompt() {
    let input = document.getElementById('rawInput').value;
    if (!input.trim()) return;

    // إخفاء البيانات الحساسة (إيميلات، مفاتيح API، أرقام هواتف)
    let cleaned = input
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL_REDACTED]')
        .replace(/(sk-[a-zA-Z0-9]{20,})/g, '[API_KEY_REDACTED]')
        .replace(/(\+?\d{1,4}[\s-.]?)?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}/g, '[PHONE_REDACTED]');

    document.getElementById('cleanOutput').value = cleaned;
}

function clearAll() {
    document.getElementById('rawInput').value = '';
    document.getElementById('cleanOutput').value = '';
}

function copyOutput() {
    let output = document.getElementById('cleanOutput');
    if (!output.value) return;
    output.select();
    document.execCommand('copy');
    alert('تم نسخ النص المنظف بنجاح!');
}
