# Ox Alpha — findings by GLM 5.3 Flash

- Source: anonymous (`opencode/ox-alpha` on OpenCode Zen; also on OpenRouter under `ox-alpha`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth/experimental model — no named developer)
- **Short description:** An anonymous frontier-class coding model that appeared on OpenRouter on 2026-08-20 with no named developer, no pricing and near-unlimited rate limits, then appeared on OpenCode Zen's free tier. Its own site claims a 1M-token context, reasoning, writing and image understanding; community buzz attributes it to Z.AI (GLM-5.3 clues) — attribution is unconfirmed.
- **Provider / access:** OpenCode Zen (`opencode/ox-alpha`, free tier); OpenRouter (anonymous endpoint; OpenRouter states it is not the developer, owner or operator); oxalpha.com offers free no-login chat.
- **Release / knowledge:** surfaced 2026-08-20 (AiToolsObserver). Knowledge cutoff: unverifiable (no named developer or model card).
- **IDs:** `opencode/ox-alpha` (Zen); `ox-alpha` (OpenRouter).
- **Context window:** conflicting claims — **1M tokens** per oxalpha.com ("1M-token context window") vs **200K** on the Zen serve config (repo catalog). No provider documentation exists to arbitrate.
- **Modalities:** text in/out on the verified Zen config; oxalpha.com additionally claims image understanding (unverified — no named developer has confirmed it).
- **Pricing (as of 2026-09-18):** **$0** — free on Zen and oxalpha.com, "no pricing" on OpenRouter. Data-retention terms are unauditable while the developer is anonymous (AiToolsObserver flags this as an enterprise risk: treat as an unverified third party — no confidential code).
- **Architecture:** unknown; Z.AI built it and it's going open-weight per Decrypt; community suspects a GLM-5.3 variant (unconfirmed; "modelprint"-style fingerprinting is inconclusive).

### Raw benchmarks found

Agent / tool use:

- Independent community benchmark, 10 real-world OSS coding tasks: **80% mean pass rate (8/10 solved)** — +15 points over the best reference model (oxalpha.com, reproduced as published; small-sample caveat: one task moves the mean by 10)
- Solved **meriyah-explicit-resource-decl**, the table's hardest task (best reference model: 1/4); missed `scc-bounded-memory-spilling` and `vulture-persistent-analysis-cache`
- Terminal-Bench / SWE-bench / OSWorld: no verified public score found

Reasoning / knowledge:

- Positioned as a "powerful reasoning model" with logic-puzzle strength; GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- Head-to-head means (same 10-task run): Ox Alpha **80%** vs Claude Fable 5 (max) **65%**, GLM-5.3 (max) **62%**, Grok-4.6 (xhigh) **62%**, GPT-5.6-sol (max) **52%** (oxalpha.com third-party data)
- DeepSWE was referenced in early coverage; later analysis says the headline number shifted once the full test set ran — treat initial scores as preliminary (AiToolsObserver)

Long context:

- 1M claimed (oxalpha.com) vs 200K served on Zen; no retrieval benchmark found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six. Scores are provisional — the only quantitative evidence is a 10-task community eval; everything else is positioning.

- **Tool use: 82/100.** Top of the community coding table (80% mean) suggests strong agentic-coding ability, but a 10-task sample with pass/fail scoring cannot support a higher score.
- **Reasoning: 78/100.** "Powerful reasoning" positioning and the hardest-task solve are encouraging; zero published reasoning benchmarks caps it provisionally.
- **Context window: 80/100.** Scored between the 200K serve config (verified) and the claimed 1M (unverified) given the anonymous provenance.
- **Multimodal: 45/100.** Verified config is text-only; oxalpha.com claims image understanding — unresolved conflict, scored mid-way.
- **Coding: 90/100.** 80% mean vs frontier reference models (Fable 5, GLM-5.3, GPT-5.6-sol, Grok-4.6) is a standout result even at n=10.
- **Cost efficiency: 100/100.** $0 on Zen and oxalpha.com; the real cost is provenance risk, not tokens.
- **Overall Score: 75/100.** Mean: (82 + 78 + 80 + 45 + 90 + 100) / 6 = 475/6 = 79.2 → **79**. Best fit: a free stealth coding experiment with exceptional early results — great for experiments, not for confidential code until attribution and terms are auditable.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (oxalpha.com benchmark page (third-party 10-task eval reproduced as published), AiToolsObserver analysis of the OpenRouter debut, attribution clues and enterprise-risk notes; OpenCode Zen docs for the free-tier config); conflicting claims are quoted side-by-side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
