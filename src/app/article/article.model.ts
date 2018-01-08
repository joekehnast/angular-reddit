export class Article {
    title: string;
    link: string;
    votes?: number;

    constructor(title: string, link: string, votes?:number) {
        this.title = title;
        this.link = link;
        this.votes = votes | 0;

    }

    voteUp() : void {
        this.votes++;
      }
    voteDown() : void {
        if (this.votes > 0) this.votes--;
    }

    domain() : string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            console.log("Error in domain() function: " + err);
            return null;
        }
    }
}
