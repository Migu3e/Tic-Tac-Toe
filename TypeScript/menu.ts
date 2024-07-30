document.addEventListener('DOMContentLoaded', (): void => 
{
    const btn1v1 = document.getElementById('btn1v1');
    const btn1vPC = document.getElementById('btn1vPC');

    if (btn1v1 instanceof HTMLElement) 
    {
        btn1v1.addEventListener('click', (): void => 
        {
            window.location.href = 'grid1v1.html';
        });
    } else {
        console.error('1v1 button not found');
    }

    if (btn1vPC instanceof HTMLElement)
    {
        btn1vPC.addEventListener('click', (): void =>
        {
            window.location.href = 'grid1vpc.html';
        });
    } else 
    {
        console.error('1vPC button not found');
    }
});