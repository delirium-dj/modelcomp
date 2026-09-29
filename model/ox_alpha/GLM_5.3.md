# Ox Alpha — findings by GLM 5.3

- Source: OpenCode Zen stealth listing, revealed as Z.ai GLM-5.3-Flash (`opencode/ox-alpha`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth alias; revealed as Z.ai GLM-5.3-Flash). **Alias/variant flag:** this entry is the OpenCode/OpenRouter stealth listing — the same weights now live as the named `glm-5.3-flash` (see `model/glm-5.3-flash/`); this report scores the ox-alpha alias on the revealed model's verified benchmarks.
- **Short description:** The unattributed free stealth reasoning model OpenCode dropped on 2026-08-20 (OpenRouter `stealth/ox-alpha`) for long-horizon coding agents; later re-attributed by OpenCode's own data hub to Z.ai as GLM-5.3-Flash (320B/18B MoE, MIT).
- **Provider / access:** OpenCode Zen `opencode/x-preview-f-free` (Chat Completions, OpenAI-compatible), OpenRouter `stealth/ox-alpha`; now named via ~20 API providers as GLM-5.3-Flash. Tool calling, `response_format` JSON (no schema enforcement on OpenRouter), reasoning variants `low`/`high`/`max`.
- **Release / knowledge:** stealth listing 2026-08-20; named GLM-5.3-Flash release 2026-08-26 (per Artificial Analysis FAQ). Knowledge cutoff unknown.
- **IDs:** `opencode/x-preview-f-free` (Zen), `openrouter/stealth/ox-alpha`, `zai-org/GLM-5.3-Flash` (Hugging Face, open weights).
- **Context window:** 1,048,576 total / 131,072 max output (OpenRouter listing + OpenCode catalog, verified 2026-08-21 by developersdigest.tech).
- **Modalities:** text / image / video / PDF in; text out (OpenRouter + OpenCode catalog; AA API measurement covers text+image). Reasoning yes; tool calls yes; JSON mode partial (no schema enforcement).
- **Pricing (as of 2026-09-28):** free $0/$0/$0 during the stealth preview window (2026-08-20 → ~2026-08-27, ended); current GLM-5.3-Flash list pricing $0.15 in / $0.50 out per 1M, 83% cache discount (AA; OpenCode observed data concurs). Zen carried a zero-retention claim for the free tier; OpenRouter's listing instead said prompts are retained but not used for training.
- **Architecture:** sparse MoE, 320B total / 18B active (AA); MIT open weights since the reveal.

### Raw benchmarks found

> All rows are measurements of GLM-5.3-Flash (the revealed ox-alpha) — AA = Artificial Analysis independent measurement, "Vals" = Vals AI harness, both via BenchLM (updated 2026-09-28). No benchmark existed under the "ox-alpha" name while it was stealth.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (AA/BenchLM)
- Terminal-Bench 4.0: **32.8%** (AA/BenchLM)
- Toolathlon-Verified: **78.4%** (BenchLM)
- AutomationBench: **48.8%** / AA-AutomationBench: **60.4%** (BenchLM)
- AA Tau3-Banking: **47.2%** (BenchLM)
- GDPval-AA: **1773 Elo** (BenchLM)
- Agents' Last Exam: **26.3%** (BenchLM)
- AA Briefcase: **1452 Elo** (BenchLM)
- AA ITBench: **51.2%** / AA EnterpriseOps-Gym: **33.2%** (BenchLM)
- GDP.pdf: **15.4%** (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA) / **86.4%** (Vals) (BenchLM)
- HLE: **39.9%** (AA) / **55.3% with tools** (BenchLM)
- LCR: **80.0%** (AA/BenchLM)
- MLCR: **51.1%** (BenchLM)
- CritPt: **15.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **42** (#4/116 in large open-weights class; median 18) (AA; BenchLM lists 41.8)
- Omniscience Index: **7.5%** (BenchLM)
- MMLU-Pro: **86.1%** (Vals) (BenchLM)

Coding:

- SWE-bench Verified: **92.0%** (Vals harness) (BenchLM)
- LiveCodeBench: **80.5%** (Vals harness) (BenchLM)
- Terminal-Bench 2.1: **84.3%** (also a coding-agent harness) (BenchLM)
- DeepSWE: **63.4%** (BenchLM)
- SciCode / AA-SciCode: **51.6%** (BenchLM)
- NL2Repo: **56.3%** / OpenHarmony Bench: **57.3%** (BenchLM)
- BenchLM overall composite: **60.62/100, #44/512** (BenchLM; sibling flagship GLM-5.3 = 65.44)

Long context:

- No public MRCR / RULER / GraphWalks number at 1M. Closest proxy: AA-LCR **80.0%**. 1M/131K limits verified from listings.

Multimodal (grounded):

- CharXiv: **89.4%** / MMVU: **80.5%** / Chartography with tools: **78.0%** / OfficeQA Pro: **62.4%** / BabyVision: **53.4%** / Design Arena Website: **1280 Elo** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA 1773 Elo is frontier-class (above Muse Spark 1.3's 1754) and Toolathlon-V 78.4% / TB2.1 84.3% / ITBench 51.2% are strong; capped by weak TB4.0 (32.8%), Agents' Last Exam (26.3%), EnterpriseOps-Gym (33.2%) and GDP.pdf (15.4%).
- **Reasoning: 77/100.** AA-GPQA 91.2% is near-frontier, HLE 39.9% sits at the frontier reference line (55.3% with tools) and LCR 80.0% is strong; capped by CritPt 15.4%, MLCR 51.1% and a mediocre Omniscience Index (7.5).
- **Context window: 95/100.** Native 1M with a verified 131K max output (≥1M tier); no public ≥512K retrieval benchmark (MRCR/RULER) to justify 100.
- **Multimodal: 88/100.** Text/image/video/PDF in with measured CharXiv 89.4% and MMVU 80.5%; capped by text-only output, no audio input, and AA-level verification covering text+image only.
- **Coding: 80/100.** SWE-bench Verified 92.0% (Vals) and LiveCodeBench 80.5% are near-frontier, TB2.1 84.3% strong; capped by mid DeepSWE 63.4% and SciCode 51.6%.
- **Cost efficiency: 92/100.** The evaluated free stealth window ($0, ended ~2026-08-27) scored 100; on current verified pricing ($0.15/$0.50, blended ~$0.10/1M, 83% cache discount) it lands between the $0.10/$0.20 (97–99) and $0.60/$2.20 (~92) reference bands, minus verbosity drag (180M output tokens vs 140M median → $0.25/task).
- **Overall Score: 85/100.** (85 + 77 + 95 + 88 + 80) / 5 = 85.0 → 85. Best-fit recommendation: a top-tier free-preview find that matured into an excellent-value open-weights agent — strong default for long-horizon coding and knowledge-work automation at ~$0.10 blended per 1M; keep a frontier model for the hardest physics/CritPt-style reasoning.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (OpenCode/OpenRouter listings, developersdigest.tech stealth-period guide, OpenCode usage data, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
