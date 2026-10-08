# MAI-Code-1-Flash — findings by GLM 5.3 Flash

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's small, fast text-only coding model (released 2026-06-02 at Microsoft Build) built around real GitHub Copilot and VS Code workflows. Adaptive thinking, adaptive solution length control, trained from the ground up on clean enterprise-grade data without third-party distillation. Succeeded by MAI-Code-1.1-Flash (2026-10-07).
- **Provider / access:** GitHub Copilot individual users in VS Code (model picker and default auto picker, no additional setup); OpenCode Zen `opencode/mai-code-1-flash` (standard pricing). Chat Completions / Copilot harness; agentic tool-using agent tasks.
- **Release / knowledge:** Released 2026-06-02 (verified via microsoft.ai launch announcement and BenchmarkList); knowledge cutoff not published.
- **IDs:** `opencode/mai-code-1-flash` (Zen, no Free ID); GitHub Copilot model-picker route.
- **Context window:** 256,000 tokens total, 128,000 max output (meta-verified).
- **Modalities:** Text in → text out; reasoning yes (adaptive thinking — concise for simple requests, more budget for complex tasks); tool calls yes (agentic coding in the Copilot harness); JSON mode not documented.
- **Pricing (as of 2026-10-08):** $0.75 in / $4.50 out per 1M (GitHub Copilot), cached input $0.075. Paid only. (Successor 1.1 launched at a quarter of this price.)
- **Architecture:** Proprietary, closed weights; ~138B-class small coding model per catalog records; trained directly with GitHub Copilot production harnesses; adaptive solution length control (up to 60% fewer tokens on SWE-Bench Verified); API-only serving per BenchmarkList.

### Raw benchmarks found

All first-party (Microsoft model-card figures via BenchmarkList, dated 2026-06-02):

Agent / tool use:

- Terminal-Bench 2.0: **54.8%** (rank 20 of 68, 72nd percentile)
- Terminal-Bench 2.1: **51.7%** (rank 76 of 194, 61st percentile; field leader Fable 5.1 at 91.4%)
- IFBench (instruction following): **75.0%** (#1 of 1 — small field)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME 2026: **92.5%** (rank 25 of 36, 31st percentile; field leader GPT-5.6 Sol 99.9%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no composite value confirmed
- Omniscience Accuracy / Hallucination Rate: no verified public score found; Microsoft's 186-question adversarial benchmark: **85.8%** adjusted accuracy (strongest in instruction-following and recognizing impossible problems; Einstellung traps below 50%)

Coding:

- SWE-bench Verified: **71.6%** (rank 36 of 50, 29th percentile; beats Claude Haiku 4.5 with up to 60% fewer tokens)
- SWE-Bench Pro: **51.2%** (vs Claude Haiku 4.5's 35.2%, +16 pts — Microsoft production harness)
- SWE-bench Multilingual: **65.5%** (300 tasks, 9 languages)
- ArtifactsBench: **36.4%** (rank 8 of 8)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (256K window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 54.8% (rank 20/68) and Terminal-Bench 2.1 51.7% are mid-band terminal results; IFBench 75.0% tops a tiny field; no Tau3/GDPval coverage, capping the score in the low 60s.
- **Reasoning: 65/100.** AIME 2026 92.5% is strong but only 31st percentile among peers, and 85.8% on Microsoft's adversarial benchmark shows good trap recognition; no GPQA/HLE published, which caps the score.
- **Context window: 77/100.** Documented 256K tokens (200K–500K tier = 65–84; 256K ≈ 77); no retrieval percentages published, 128K max output noted as caveat.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input documented (ArtifactsBench 36.4% measures artifact generation from code, not input modality).
- **Coding: 68/100.** SWE-bench Verified 71.6% and SWE-bench Multilingual 65.5% are mid-band; SWE-Bench Pro 51.2% beats Haiku 4.5 by 16 points; ArtifactsBench 36.4% (last of 8) and no LiveCodeBench/SciCode coverage cap the score.
- **Cost efficiency: 80/100.** $0.75/$4.50 per MTok — above the ~$0.60/$2.20 ≈ 92 reference in output price; the up-to-60%-fewer-tokens behavior and strong price/performance-vs-Haiku claims temper the sticker cost.
- **Overall Score: 57.4/100.** Mean of the five quality dims (62+65+77+15+68)/5 = 57.4; best fit: fast, cheap text coding workhorse for everyday Copilot/VS Code development — not a general frontier model and not for multimodal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (microsoft.ai launch announcement, BenchmarkList first-party model card, meta specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
