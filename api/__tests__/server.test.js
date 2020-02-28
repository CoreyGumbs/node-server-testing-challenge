describe('server', () => {
    describe('environment', () => {
       
        it('should use testing environment', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
})