# Omen Alpha — findings by Muse Glimmer 30B

- Source: Stealth/Omen Alpha (`opencode/omen-alpha`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth coding/agent model widely reported as the likely 2.0 successor to Ox Alpha. Vendor unconfirmed; strongest public clue is OpenCode vendor path `zhipu/omen-alpha` suggesting Z.ai/GLM lineage. Top use case is low-cost coding and agentic work with zero data retention.
- **Provider / access:** OpenCode Go / TokenRa.io OpenAI-compatible Chat Completions. Model ID `omen-alpha`. Endpoint `zen/go/v1/chat/completions`.
- **Release / knowledge:** First spotted ~2026-09-04 per omenalpha.io record and buildfastwithai review; knowledge cutoff unknown — no verified cutoff published.
- **IDs:** `opencode/omen-alpha` (vendor undisclosed; attribution unresolved)
- **Context window:** ~500K tokens community-reported, officially undisclosed — provisional, flagged for re-check.
- **Modalities:** Text input; image input per community/platform info (OpenCode compare page lists Text/Image/Video/PDF vs Qwen3.8 Max — provisional); text output; reasoning-oriented per listings; tool calls via OpenAI-compatible API.
- **Pricing (as of 2026-10-25):** Listed $0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cached read. TokenRa route $0.08 in / $0.26 out 60% off. Zero data retention, prompts not used for training.
- **Architecture:** Proprietary, undisclosed. Community measurements cite ~180 tok/s sustained; no parameter count published.

### Raw benchmarks found

> Sources: omenalpha.io homepage 2026-09-05, benchmarks.html 2026-09-04 snapshot, what-is-omen-alpha.html 2026-09-05; AI Coding Daily model page, OpenCode data reference.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- OpenCode leaderboard snapshot Methodology v1, Omen Alpha High config, 2026-09-04: **23.14/40 overall, rank #15** — Code quality 9.94/20, CSV import PHP 4/5, offline sync PHP 3.5/5, bank feed Dart/Flutter 2.7/5, shipping quotes Go 3/5; avg cost $0.03/prompt, avg time 01:51. Niche 4-project rubric, not a standard harness; provisional weight.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (~500K window community-reported only; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 60/100.** Zero public agentic benchmark numbers (TB/Tau/GDPval/Claw). OpenCode snapshot exercises code edits, not tool orchestration. Capped at 60 per methodology for missing verified tool scores.
- **Reasoning: 62/100.** Provisional floor. Listings describe reasoning-oriented use, but no public GPQA/HLE/LCR/CritPt/Intelligence Index numbers exist for this ID. Capped hard.
- **Context window: 85/100.** Provisional ~500K community-reported lands at the floor of the 500K–1M tier per methodology. Officially undisclosed, flagged for re-check.
- **Multimodal: 60/100.** Community/platform info reports image input; text output only. No public vision evaluation. Mid-band pending confirmation; not text-only 15.
- **Coding: 65/100.** OpenCode snapshot 23.14/40 = 57.9% on a narrow 4-project rubric, no standard SWE/LiveCode/DeepSWE numbers. Useful signal but limited reproducibility caps score.
- **Cost efficiency: 95/100.** $0.20/$0.66 pricing with $0.08/$0.26 TokenRa route and verified zero retention places it in top value band.
- **Overall Score: 66/100.** Mean of five quality dims (60 + 62 + 85 + 60 + 65) / 5 = 66.4 → 66. Best-fit: inexpensive stealth coding tier with unresolved attribution and no standard benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; omenalpha.io official record, benchmarks.html snapshot, what-is-omen-alpha.html identity notes, AI Coding Daily coverage, OpenCode data reference; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
