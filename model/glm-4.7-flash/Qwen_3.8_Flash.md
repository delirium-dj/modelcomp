# GLM 4.7 Flash — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu (`zai-org/GLM-4.7-Flash`; curated id `opencode/glm-4.7-flash`), cross-checked against **llm-stats' launch review**, the GLM-4.7 launch blog, OpenRouter, the HF model card and HN deployment notes
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Spec-conflict note (evidence over curated meta):** the curated `meta.json` describes a **"30B-A3B MoE … 1M context."** The primary sources disagree: llm-stats' dedicated launch review states GLM-4.7-**Flash** is a **dense 30B model with a 128K context** (the *flagship* GLM-4.7 is the 355B MoE at 200K), and the "62 GB / ~60 GB BF16" footprint cited on HN and in the review is consistent with a dense 30B, not an A3B MoE. This report therefore scores on the **verified dense-30B / 128K / text-only** spec and flags the meta's MoE+1M claim as likely erroneous. (A genuine 1M/A3B variant should trigger a re-score.)

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Z.ai's **lightweight, code-specialized sibling of the flagship GLM-4.7** — a **dense 30B-parameter** open-weights model tuned *specifically for software engineering* ("frontier-level coding chops without the massive bill"). It "punches above its weight class" on SWE-bench-class tasks, handles τ²-style multi-step tool sequencing, terminal/bash, multilingual (EN/中文) code and React/Vue frontends, and adds **Thinking Mode (interleaved CoT) + preserved thinking** for long debug sessions. Open MIT weights make it a self-hostable budget coder rather than a top-tier general reasoner.
- **Provider / access:** open weights (Hugging Face `zai-org/GLM-4.7-Flash`, **MIT**); hosted on Z.ai API, OpenRouter, Cerebras, SiliconFlow, Novita; integrates with Claude Code / Cursor; 4-bit quant fits 15–20 GB VRAM (RTX 3090/4090), BF16 ~60 GB.
- **Release / knowledge:** **December 2025** (launched alongside flagship GLM-4.7); training data through late 2024.
- **IDs:** `GLM-4.7-Flash` (dense 30B); flagship `GLM-4.7` (355B MoE); family `glm-4.6`, `glm-4.5`, `glm-5`.
- **Context window:** **128,000** (verified; curated meta's "1M" not corroborated by primary sources).
- **Modalities:** **text in / text out** — text-only (no image/audio); reasoning/Thinking Mode yes; function calling + streaming.
- **Pricing (as of 2026-10-23):** **~$0.60/M input, ~$2.20/M output** on Z.ai; **free MIT self-host**; meta's "Free on Zen" reflects the OpenCode Zen access path.
- **Architecture:** dense 30B (predictable latency, easy quantization — deliberately simpler than the flagship MoE).

### Raw benchmarks found

> **Provenance:** capability claims are **Z.ai first-party + llm-stats/OpenRouter aggregator** framing; no clean per-suite *numeric absolute* (e.g. an exact SWE-bench Verified %) was located in the fetched sources, and OpenRouter labels it "30B-class SOTA." Read the coding/tool-use strength as **well-corroborated qualitatively but not point-quantified** below.

Coding / agentic:

- **SWE-bench Verified** — "holds its own against proprietary models that cost 5× more; punches above its weight class" (no exact % transcribed)
- **τ²-Bench** (interactive tool invocation) — performs well at multi-step sequencing (search → read → edit)
- **Multilingual evals** — scores high; handled mixed EN/中文 codebases without choking
- **Terminal** — "understands shell syntax, writes bash that mostly works first try"

Reasoning / knowledge:

- Thinking Mode (interleaved CoT) + preserved thinking aid debugging, but the tradeoff is explicit: **"designed for efficiency, not top-tier closed-model reasoning at scale."** No GPQA/HLE/AIME absolute cleanly transcribed.

### Normalized scores (1–100)

- **Tool use: 72/100.** Genuinely good multi-step tool orchestration — τ²-Bench strength, function calling, terminal/bash, agentic-coding loops (works inside Claude Code/Cursor) — solid for a 30B, docked only for the missing quantitative τ² absolute.
- **Reasoning: 64/100.** The interleaved/preserved Thinking Mode is real and useful, but its own positioning ("efficiency, not top-tier reasoning") and absence of measured knowledge absolutes cap this at a competent mid-tier dense model.
- **Context window: 56/100.** **128K** is comfortably usable for whole-repo context, but it is a mid-range window well below the 1M/200K flagships — and the meta's optimistic "1M" is unverified, so this scores on the real 128K.
- **Multimodal: 15/100.** **Text-only** (input and output) — the floor for this dimension; no image/audio/video despite a family that elsewhere goes multimodal.
- **Coding: 76/100.** Its entire reason to exist and its best-evidenced strength: strong SWE-bench-Verified-class results "punching above its weight," plus multilingual code, frontend (React/Vue) competence and terminal fluency — a legitimately good budget coder, discounted somewhat for the absent hard percentage.
- **Cost efficiency: 88/100.** $0.60/$2.20 (70–80% under comparable proprietary tiers) with **free MIT self-host** on consumer GPUs — excellent value, nudged below the pure-$0 open tiers by the $2.20 output rate.
- **Overall Score: 56.6/100.** Half-up mean of the five quality dims (72+64+56+15+76)/5 = 56.6. Best fit: **cost-constrained, self-hostable agentic coding** — CI/CD automation, repo-scale edits, multilingual and frontend work, terminal scripting — where a dense 30B that rivals 5×-cost closed coders and runs on a 3090/4090 is the win. Its **text-only modality (15) and 128K window** are the structural drags on an otherwise strong value story; general reasoning is deliberately efficiency-first, not frontier.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **llm-stats GLM-4.7-Flash launch review** (dense 30B, 128K, MIT, ~$0.60/$2.20, SWE-bench-Verified "above weight," τ²-Bench, multilingual, terminal, Thinking/preserved thinking, 15–20 GB 4-bit / ~60 GB BF16), the **GLM-4.7 blog** (Dec 2025, coding focus), **OpenRouter** ("30B-class SOTA"), **HF `zai-org/GLM-4.7-Flash`** ("strongest 30B class"), and HN deployment notes (62 GB footprint). Curated `meta.json` supplies MIT/30B-class/free-Zen but its **"A3B MoE" and "1M context" claims were overridden** by the corroborated dense-30B/128K evidence and flagged. Scores are normalized 1–100 interpretations: **no exact benchmark percentage could be located**, so coding/tool-use are scored on strongly corroborated qualitative evidence (discounted for the missing number), reasoning reflects the "efficiency-not-frontier" tradeoff, and the **text-only** modality sets the 15 floor.
- Revisit trigger: an exact SWE-bench Verified / GPQA / τ² numeric absolute for `GLM-4.7-Flash`; a first-party confirmation or correction of the architecture (dense vs MoE) and context (128K vs 1M) conflict; or any multimodal capability disclosure.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
