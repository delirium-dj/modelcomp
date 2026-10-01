# Claude Sonnet 3.7 — findings by Kimi K3

- Source: Anthropic (`claude-3-7-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's first hybrid reasoning model (standard + extended thinking in one model), released with Claude Code; state-of-the-art coding and agentic performance for Feb 2025. Now superseded and RETIRED on Anthropic-operated platforms.
- **Provider / access:** RETIRED — `claude-3-7-sonnet-20250219` was deprecated 2025-10-28 and retired 2026-02-19 on the Claude API / Claude Platform on AWS / Microsoft Foundry (requests now fail; recommended replacement `claude-sonnet-4-6`). Amazon Bedrock and Google Cloud Vertex AI run their own retirement schedules.
- **Release / knowledge:** Released 2025-02-24 (official announcement). Knowledge cutoff not stated in the announcement.
- **IDs:** `claude-3-7-sonnet-20250219` (alias `claude-3-7-sonnet-latest`). No Free ID exists on OpenCode Zen.
- **Context window:** 200K tokens (documented Claude 3.7 generation window); extended thinking budget controllable up to a 128K-token output limit (official announcement).
- **Modalities:** Text + image in; text out. First hybrid reasoning model: standard mode or extended thinking with user-set thinking budget; tool use supported. No audio/video input.
- **Pricing (as of retirement):** $3 / $15 per MTok input/output, thinking tokens billed as output (official announcement). No free API tier; Claude.ai Free plan access (without extended thinking) during its active life.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- TAU-bench: state-of-the-art for its release date per Anthropic (scores in announcement bar-chart image; numeric values not extractable from the page text). Anthropic published the scaffolding methodology (planning-tool prompt addendum, max steps raised 30→100).
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: reported SOTA-class in announcement benchmark table (image only); **no verified readable number extracted**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (system card notes 45% fewer unnecessary refusals vs predecessor)

Coding:

- SWE-bench Verified: **70.3%** (official Anthropic, high-compute scaffold with parallel sampling + regression-test rejection, n=489 solvable subset) and **63.7%** vanilla pass@1 on the same subset with a minimal two-tool scaffold (bash + string-replace editing)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported publicly.

### Normalized scores (1–100)

- **Tool use: 65/100.** TAU-bench state-of-the-art at release (official, scaffold documented) plus SWE-bench agentic scaffolding results mark it a strong Feb-2025 tool user; capped by no Terminal-Bench 2.1/Tau3/GDPval numbers and vendor-only sourcing.
- **Reasoning: 62/100.** First hybrid reasoning model with thinking budgets; image-only GPQA/AIME figures could not be verified, so scored upper-mid band rather than frontier band.
- **Context window: 70/100.** Tier mapping: 200K = 70; 128K thinking/output budget noted as caveat.
- **Multimodal: 65/100.** Text + image input, text output only → "+image in" band (60–70); no audio/video, no non-text output.
- **Coding: 75/100.** SWE-bench Verified 63.7% vanilla / 70.3% high-compute (official, published methodology) was Feb-2025 SOTA; capped below the frontier band by the subsequent model generations and no LiveCodeBench/SciCode data.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps exactly to the methodology's $3/$15 → ~60 reference point; model now retired, so the score is historical.
- **Overall Score: 67/100.** Mean of the five quality dims: (65 + 62 + 70 + 65 + 75) / 5 = 67.4 → 67. Best fit: historical reference only — the model is retired on Anthropic-operated platforms; current workloads belong on claude-sonnet-4-6 or newer.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Anthropic announcement 2025-02-24 with published scaffolding appendix, official model deprecations page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
