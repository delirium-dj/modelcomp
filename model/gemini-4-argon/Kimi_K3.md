# Gemini 4 Argon — findings by Kimi K3

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's new frontier model and the first of the Gemini 4 generation (first Google flagship since Gemini 3.1 Pro, Feb 2026), pitched at long-horizon software engineering, enterprise knowledge work (legal/finance), and cyber defense. Codename-style naming (like GPT-6 Astra/Sol) replaces the Pro/Flash tier scheme for this generation.
- **Provider / access:** Extremely limited at launch (2026-09-30): Fairwind Program only (vetted cyber defenders, >650 partners incl. Wiz), no public API model ID published yet; paid API customers and Google AI Ultra subscribers "next," no date. No Free ID (paid only, gated).
- **Release / knowledge:** Announced 2026-09-30 (blog.google, DeepMind). Knowledge cutoff not published; no public model card yet.
- **IDs:** No public API ID yet (gated Fairwind access). No Zen ID.
- **Context window:** 1M tokens input (per Artificial Analysis; Google has not officially disclosed input context); max output 1M tokens per response (up from 64K) via "Long Decode Continuation" — first frontier model with million-token output.
- **Modalities:** Text + image input per Google's table; Artificial Analysis's launch post also lists video and speech input; text output. Reasoning model (high = highest setting; tested at high by AA). Gray Swan IPI attack success just 0.7% (best-in-class injection resistance).
- **Pricing (as of 2026-09-30):** Introductory $2.00/M input, $10.00/M output, $0.10/M cached input (95% cached discount); standard after promo: $4.00/$20.00, $0.20 cached (per blog.google + Logan Kilpatrick). No end date given for the intro period. AA-measured task cost: $1.99 (intro) vs GPT-6 Astra $3.26, Opus 5.5 $5.98.
- **Architecture:** Proprietary, unreleased weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier, business execution): **51.3%** — #1 (Google table: Opus 5.5 42.5%, Astra 41.4%; note Anthropic's own card lists Opus 5.5 at 40.0%)
- AutomationBench-AA: **77.5%** — #1, +6 over Sonnet 5.5 (Artificial Analysis, independent)
- GraphWalks (long context, agentic): **84.2%** — #1 (Opus 5.5 66.8%, Astra 71.8%) (Google)
- OSWorld-2.0 (computer use): **69.2%** — trails Astra 72.6% (Google)
- CWE-bench v1 (vulnerability remediation): **68%** — tied #1 with GPT-6 Astra, +1 over Opus 5.5 (Google; rivals run in own harnesses)
- Gray Swan IPI (prompt-injection attack success, lower better): **0.7%** — best of frontier (Astra 8.5%)
- Vals CyberBench: **77.86%** — #2, 0.12 pts behind GPT-6 Sol (Vals, independent)
- Harvey Legal Agent: **19.6%** vs Astra 5.4%, Opus 5.5 3.8% (Google)
- Vals Finance Agent v2: **65.4%** (Opus 5.5 58.6%, Astra 53.5%) (Google)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (high effort) — equals GPT-6 Astra, behind Opus 5.5 (58) and Sonnet 5.5 (56); +23 over Gemini 3.1 Pro Preview (30) (Artificial Analysis, independent)
- AA-Omniscience hallucination rate: **15%** — the lowest AA has measured among models ≥45 on the Index; factual accuracy 50% (−13 pts vs Astra, abstention trade-off)
- LMArena Text Arena: **1525 pts, #1**; also #1 in coding, hard prompts, instruction following, creative writing (arena.ai, independent)
- GPQA Diamond / HLE / CritPt: no verified public score found individually for this ID

Coding:

- DeepSWE v1.1 (long-horizon SWE): **77.9%** — new SOTA (Opus 5.5 74.2%, Astra 74.1%) (Google)
- Terminal-Bench 4.0: **57.4%** — behind Opus 5.5 (66.4%) and Astra (58.2%) (Google)
- FrontierSWE v2: **55.0%** — behind Astra (65.5%) and Opus 5.5 (62.3%) (Google)
- Terminal-Bench Science 0.1: **57.6%** — behind Astra (68.1%), Opus 5.5 (63.3%) (Google)
- Vals IOI (programming olympiad): **100%**, tied with GPT-6 Astra (Vals, independent)
- LMArena Code Arena: WebDev: **#8, 1679 pts** (weaker spot; matches Bloomberg-reported internal doubts about front-end work)

Long context:

- GraphWalks: **84.2%** — best published (see above); plus unique 1M-token single-response output.

### Normalized scores (1–100)

- **Tool use: 85/100.** #1 on both AutomationBench variants (51.3% Google / 77.5% AA), best-in-class GraphWalks 84.2%, tied-first CWE-bench, and best IPI resistance for agent safety; capped by trailing OSWorld-2.0 (69.2%) and Terminal-Bench 4.0 (57.4%).
- **Reasoning: 84/100.** AA Index 53 matches Astra, LMArena Text Arena #1 (1525), record-low 15% hallucination; capped because Opus 5.5 (58) and Sonnet 5.5 (56) still outscore it on the independent aggregate.
- **Context window: 89/100.** 1M input with best-of-field GraphWalks retrieval, and an unprecedented 1M max single-response output vs 128K for all rivals; capped only because Google hasn't formally disclosed the input window size in its own docs.
- **Multimodal: 70/100.** Text + image in with video and speech input listed by Artificial Analysis, LVBench 91.7% long-video SOTA; text-only output and no GA access cap it below full-duplex models.
- **Coding: 82/100.** DeepSWE v1.1 SOTA 77.9% and IOI 100% are elite, but Terminal-Bench 57.4%, FrontierSWE 55.0% and WebDev Arena #8 show real inconsistency; Bloomberg-reported internal skepticism about everyday coding confirms the mixed picture.
- **Cost efficiency: 76/100.** Intro $2/$10 ($0.10 cached) yields $1.99/AA-task — 60% of Astra — but standard $4/$20 and a heavy ~62K output tokens/task (2.7x GPT-6.1 Sol's task cost) erode it once the promo ends.
- **Overall Score: 82/100.** Half-up mean of (85+84+89+70+82)/5 = 81.8 → 83. Best fit: gated enterprise/defense work needing million-token outputs, long-document/video analysis, and low-hallucination knowledge work — once access opens beyond Fairwind.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (blog.google, marktechpost.com, felloai.com, artificialanalysis.ai, vals.ai, LMArena, arstechnica.com, CNBC); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
