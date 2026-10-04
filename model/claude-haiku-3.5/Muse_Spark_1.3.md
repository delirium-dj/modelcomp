# Claude Haiku 3.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Haiku 3.5 (`anthropic/claude-3-5-haiku-20241022`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's fastest 2024-generation model — improved across every skill set over Haiku 3 and surpassing Opus 3 on many benchmarks, particularly strong on coding tasks for its speed class.
- **Provider / access:** Anthropic API `claude-3-5-haiku-20241022` (also Bedrock/Vertex); OpenCode Zen `opencode/claude-haiku-3.5` (scaffolded ID; API type not verified).
- **Release / knowledge:** 2026-10-22 release (Anthropic announcement); knowledge cutoff 2026-07-01 (RankedAGI record).
- **IDs:** `opencode/claude-haiku-3.5` (Zen). No Free-tier Zen ID on record.
- **Context window:** 200,000 tokens (Anthropic; RankedAGI; Artificial Analysis).
- **Modalities:** Text + image in (image input followed the text-only launch); text out; reasoning no (non-reasoning generation).
- **Pricing (as of 2026-10-04):** $1.00/M input, $5.00/M output, $0.10/M cached input (RankedAGI; Artificial Analysis comparison lists $1.00/$5.00 for the sibling Haiku 4.5 line). Scored as paid at standard Anthropic pricing.
- **Architecture:** Proprietary (Anthropic) — no verified parameter count or license found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for this exact ID
- Tau3-Banking / Tau2-Bench: TAU-bench retail **51.0%**, airline **22.8%** (Anthropic model-card addendum, 2026-10-22 — outperforms Opus 3 in retail)
- GDPval-AA: GDPval-AA v2.1 **198** (Artificial Analysis comparison page, estimated-index cohort)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (RankedAGI model record)
- HLE: **4%** (Artificial Analysis comparison page)
- LCR / MLCR: AA-LCR v1.1 **27%** (Artificial Analysis comparison page)
- CritPt: **0%** (Artificial Analysis comparison page)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index **9** (estimated, independent evaluation forthcoming); MMLU **81.0%**, MMLU Pro **65.0%** (RankedAGI)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience **−23** (Artificial Analysis); Hughes HHEM hallucination rate **4.9%** (RankedAGI, summarization-hallucination lane)

Coding:

- SWE-bench Verified / SWE-Pro: **40.6%** Verified (Anthropic model-card addendum — beats the original Sonnet 3.5's 33.4%)
- LiveCodeBench: **no verified public score found**; closest coding-execution proxies: Aider Polyglot **28.0%**, HumanEval **88.1%**, LiveBench coding **51.4%** (RankedAGI)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: RankedAGI Coding **32.9%**, ChatArena coding ELO **1263** with style control (RankedAGI)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 62/100.** TAU-bench retail 51.0% beats Opus 3 and shows real API-routing ability; capped by the airline-domain 22.8%, the low GDPval-AA 198, and missing Terminal-Bench/Claw-Eval rows.
- **Reasoning: 55/100.** MMLU 81.0% is respectable but GPQA Diamond 41.6%, HLE 4%, CritPt 0% and AA-LCR 27% place it well below the 2025–2026 reasoning bar; the score reflects a fast pre-reasoning-era model.
- **Context window: 70/100.** 200K total maps exactly to the tier anchor (200K = 70); capped with no verified retrieval-at-length data and a modest output ceiling for its era.
- **Multimodal: 62/100.** Text + image in lands in the image-in tier; capped low in-tier with no verified MMMU-class score and image support arriving after a text-only launch.
- **Coding: 60/100.** SWE-bench Verified 40.6% (ahead of its contemporary Sonnet) plus HumanEval 88.1% show genuine small-model coding ability; capped by Aider Polyglot 28.0% and missing LiveCodeBench/SciCode verification.
- **Cost efficiency: 82/100.** Paid at $1.00/$5.00 — cheap on input but a $5 output rate trails the $1–$2 output peers; capped well below $0 tiers and budget $0.20-class routes.
- **Overall Score: 62/100.** Mean of the five quality dims (62 + 55 + 70 + 62 + 60) / 5 = 61.8 → 62; best fit as a low-latency legacy router for simple coding and routing chores, not current frontier work.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-10-04
- Method: public internet research (Anthropic 3.5 model announcement and model-card addendum PDF, RankedAGI model record, Artificial Analysis comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
