# Omen Alpha — findings by Muse Spark 1.3

- Source: Stealth/Omen Alpha (`opencode/omen-alpha`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth coding model (spotted Sep 2026, vendor unconfirmed — strongest public clue is OpenCode's `zhipu/omen-alpha` vendor path suggesting Z.ai/GLM lineage; widely regarded as the likely Ox Alpha 2.0 successor). Top use case: low-cost coding/agent work at $0.20/$0.66 with zero retention.
- **Provider / access:** OpenCode Go + tokenra.io (OpenAI-compatible, model ID `omen-alpha`); OpenCode Zen ID `opencode/omen-alpha`.
- **Release / knowledge:** First spotted ~2026-09-04 (omenalpha.io record; buildfastwithai review); knowledge cutoff unknown — no verified cutoff found.
- **IDs:** `opencode/omen-alpha` (vendor undisclosed; attribution explicitly unresolved).
- **Context window:** ~500K community-reported (omenalpha.io); officially undisclosed — provisional, flagged for re-check.
- **Modalities:** Text in; image input per community/platform info (OpenCode compare page lists Text/Image/Video/PDF input vs Qwen3.8 Max — provisional); text out; reasoning-oriented per listings; tool calls via OpenAI-compatible API.
- **Pricing (as of 2026-09):** Official $0.20 input / $0.66 output / $0.04 cached per 1M (omenalpha.io); tokenra.io route $0.08/$0.26 (60% off). Zero data retention, prompts not used for training.
- **Architecture:** Proprietary (undisclosed; ~180 tok/s sustained per forum measurements cited by RankLLMs suggests a Flash/quantized sparse variant — inference only, not scored).

### Raw benchmarks found

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

- OpenCode leaderboard snapshot (Methodology v1, Omen Alpha High config): **23.14/40 overall, rank #15** — Code quality 9.94/20, CSV import (PHP) 4/5, offline sync (PHP) 3.5/5, bank feed (Dart/Flutter) 2.7/5, shipping quotes (Go) 3/5; $0.03/prompt, 1:51/prompt (omenalpha.io benchmarks page transcribing the 2026-09-04 snapshot — niche 4-project rubric, not a standard harness; provisional weight)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- Usage signal only (not a benchmark): #18 OpenCode usage rank, 2.2T tokens, 69K users, 489K sessions, 69% weekly retention (OpenCode data page — adoption, zero benchmark weight)

Long context:

- no long-context retrieval reported (~500K window is community-reported only; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 60/100.** Zero public agentic benchmark numbers (TB/Tau/GDPval/Claw); the OpenCode project snapshot exercises code edits, not tool orchestration. Capped at 60.
- **Reasoning: 62/100.** Provisional floor: "reasoning-oriented" per listings with no public reasoning numbers of any kind; capped hard.
- **Context window: 85/100.** Provisional ~500K (community-reported, officially undisclosed) lands at the floor of the 500K–1M tier; flagged for re-check once a vendor spec exists.
- **Multimodal: 65/100.** Provisional image-in assumption from community/platform info; text-only out keeps it mid-band pending confirmation.
- **Coding: 68/100.** OpenCode snapshot 23.14/40 (57.9%, #15) is a real but narrow 4-project signal; capped with no standard-harness (SWE/LiveCode/DeepSWE) numbers for this ID.
- **Cost efficiency: 95/100.** $0.20/$0.66 ($0.08/$0.26 via tokenra) sits at the top value band with verified zero retention.
- **Overall Score: 68/100.** Mean of the five non-cost dims (60 + 62 + 85 + 65 + 68) / 5 = 68.0 → 68; best fit as a cheap stealth coding tier while attribution and standard benches stay unresolved.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (omenalpha.io model record + benchmark transcription, RankLLMs attribution analysis, buildfastwithai review, OpenCode data/usage pages, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
