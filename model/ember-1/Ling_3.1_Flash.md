# Ember 1 — findings by Ling 3.1 Flash

- Source: Fireworks Research (`opencode/ember-1`; Fireworks Serverless, Research Preview)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's specialized reasoning model (launched 2026-09-23), built on Kimi K3 — retrained to emit ~40% fewer tokens (71.3% reasoning-token reduction in a customer test) while holding Kimi K3-max quality; first in Fireworks' "research releases" series (two-week serverless previews, made permanent on community demand).
- **Provider / access:** Fireworks serverless API (pay-per-token; Python/REST/OpenAI-compatible clients), OpenRouter; Research Preview alongside base Kimi K3; enterprises can train custom Ember-1 variants via the Fireworks Training platform. Trained on Fireworks' own data only (no customer data).
- **Release / knowledge:** 2026-09-23; knowledge cutoff not stated (inherits Kimi K3's).
- **IDs:** `opencode/ember-1`.
- **Context window:** 1,048,576 (1M) tokens (Fireworks lists ~1,040K; OpenRouter 1,048,576).
- **Modalities:** not published by Fireworks. NOTE: the repo `meta.json` stub says "Text in/out" — a generic scaffold; Ember-1 is built on Kimi K3, whose card covers image/video/PDF input, and the same tower is inferred to be retained (unverified).
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output; cached input $0.30/M (identical to Kimi K3's public list pricing).
- **Architecture:** specialized fine-tune of Kimi K3 (2.78T-parameter class); parameter count of the Ember-1 variant undisclosed.

### Raw benchmarks found

Agent / tool use (Fireworks' own runs, n = benchmark sample size):

- Terminal-Bench 2.1 (n=89): **82.0%** (vs Kimi K3 max 80.9%, high 77.6%, low 76.4%) — beats K3-max
- τ²-Bench Airline (n=50): **66%** (vs K3 64% at every effort level)
- Bedside Bench (Doximity; 500 physician-validated clinical cases, 10 categories): new Pareto frontier on cost/task across open and closed models including GPT-5.6 Sol, GPT-6 Astra and Claude Opus 5
- Cost per benchmark vs K3 max: TB2.1 **−51.9%** (−$23.1), SWE-bench Verified **−15.5%** (−$68.1), SWE-Interact **−32.5%** (−$60.8), DeepSWE 1.1 **−23.7%** (−$126.9), τ²-Bench Airline **−5.9%** (−$0.3)
- Customer A/B (production coding): score **0.753** (Ember-1) vs **0.751** (K3); 29.9K vs 49.3K output tokens; 71.3% reasoning-token reduction, 39% total-token reduction; task completion/success/failure metrics held or improved
- Claw-Eval / ClawProBench / GDPval-AA / MCP Atlas / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- No GPQA Diamond / HLE / FrontierMath / composite intelligence index published for Ember-1; Fireworks' claim is K3-max-equivalent quality across seven benchmarks plus two production A/B tests, and a Bedside Bench cost/task Pareto frontier vs GPT-5.6 Sol, GPT-6 Astra and Claude Opus 5
- Specialized Intelligence Index (Fireworks' own): new cost-quality frontier (no numeric score captured)

Coding:

- SWE-bench Verified (n=500): **92.2%** (vs K3 max 93.2%, high 86.0%, low 80.4%)
- DeepSWE 1.1 (n=113): **75.2%** (vs K3 max 66.4%, high 62.8%, low 55.8%) — beats K3-max by 8.8 points
- SWE-Interact (n=75): **20.0%** (vs K3 max 21.3%, high 13.3%, low 6.7%)
- LiveCodeBench / SciCode / Vibe Code Bench / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR / RULER / LCR score published
- No multimodal benchmark published for Ember-1 (K3-base inference above)

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 82.0% (Fireworks' run, ahead of K3-max's 80.9%) sits just under the 88% frontier bar, with τ²-Bench Airline 66% and the Bedside Bench cost/task Pareto frontier (ahead of GPT-5.6 Sol, GPT-6 Astra, Opus 5) corroborating; these are vendor-run public benchmarks, not independent reproductions.
- **Reasoning: 85/100.** No direct GPQA/HLE score exists; the score rests on Fireworks' K3-max-parity result across seven benchmarks and two production A/B tests (K3 being a top-tier reasoning model) plus the Bedside Bench frontier. Verification awaits an independent GPQA/HLE run.
- **Context window: 95/100.** 1M-token window inherited from the Kimi K3 base; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 75/100.** Not published by Fireworks; inferred from the Kimi K3 base (image/video/PDF input) — the +video/PDF band (75–90) midpoint, flagged as unverified.
- **Coding: 88/100.** DeepSWE 1.1 75.2% clears the 74% frontier bar (and beats K3-max's 66.4%), SWE-bench Verified 92.2% is near the frontier (K3 max 93.2%), and Terminal-Bench 2.1 82.0% sits just under the 85% bar; SWE-Interact 20.0% caps the score.
- **Cost efficiency: 72/100.** $3/$15 per 1M list equals the ~60 reference, but the documented 35–40% total-token reduction (71.3% on reasoning tokens) lowers effective cost to ~$1.80/$9 — near the ~72–75 band — and per-benchmark cost runs 15–52% below K3-max.
- **Overall Score: 85/100.** (84+85+95+75+88)/5 = 85.4 → 85 — Kimi K3-class agentic coding (DeepSWE 75.2%, SWE-bench Verified 92.2%) at roughly half the token cost, with unverified modalities/reasoning provenance as the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Fireworks Ember-1 launch, Fireworks model page, OpenRouter, LavX News); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ember_1.md`, using the same headings.
