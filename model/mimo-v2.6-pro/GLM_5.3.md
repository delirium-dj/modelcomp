# MiMo V2.6 Pro — findings by GLM 5.3

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro (open-weights checkpoint `MiMo-V2.6-Pro-RL`)
- **Short description:** Xiaomi's flagship MIT-licensed omnimodal sparse-MoE (1.02T total / 42B active, Sept 2026) — the capability-leading sibling of MiMo V2.6 Flash and the #1 open-weights model on the AA Intelligence Index; built on the same "You Only RL Once" mixed-RL recipe for long-horizon agentic work.
- **Provider / access:** Xiaomi MiMo Open Platform API (`https://platform.xiaomimimo.com`, OpenAI-compatible), 2 further API providers (per AA), OpenRouter, and self-host (SGLang/vLLM recipes in the official model card). Chat Completions; reasoning + tool-call parsers (`mimo`) built into serving recipes.
- **Release / knowledge:** 2026-09-21 (per Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face); `xiaomi/mimo-v2.6-pro` (site slug ID). No Zen Free ID for this slug.
- **Context window:** 1M total (official card + AA); 128K max output (platform spec). Verified architecturally.
- **Modalities:** text / image / video / audio (speech) in, text out — **omni input independently verified by AA** (text, image, speech, video); reasoning yes; tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-09-28):** $0.435 in / $0.87 out per 1M (Xiaomi API); cached input $0.0036 (99% discount); ~$0.13 per AA Intelligence-Index task; blended ~$0.18/1M. Paid only.
- **Architecture:** Sparse MoE, 1.02T total / 42B active; same family design as the Flash card (hybrid SWA backbone, MTP speculative decoder, dedicated ViT + audio encoders); open weights, MIT license.

### Raw benchmarks found

> Vendor = Xiaomi official HF model card / family table (Sept 2026); AA = Artificial Analysis independent measurement (via BenchLM display, updated 2026-09-28). Contemporaries from the vendor table: Claude Opus 5, GPT-5.6 Sol, Claude Fable 5.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (vendor; vs Opus 5 89.1, GPT-5.6 Sol 88.8, Fable 5 84.3 — frontier band)
- Terminal-Bench 4.0: **34.9%** (vendor; AA-measured 34.8%; Opus 5 49.0)
- Toolathlon-Verified: **76.9%** (vendor; vs Opus 5 80.6)
- AutomationBench v1.0.6: **53.1%** (vendor; beats Opus 5's 50.3) / AA-AutomationBench: **58.6%** (AA)
- OSWorld-Verified: **82.0%** (vendor; Opus 5 83.4)
- JobBench: **62.0%** (vendor)
- Agents' Last Exam: **31.6%** (vendor; ties Opus 5's 31.6)
- GDPval-AA: **1673 Elo** (vendor; normalized 58.7%; vs Opus 5 1708, GPT-5.6 Sol 1588)
- AA Briefcase: **1517 Elo** (AA)
- GDP.pdf: **19.2%** (AA)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found
- CyberGym: **94.0%** / ExploitGym: **17.8%** / ExploitBench: **47.9%** / SEC Bench Pro: **66.3%** (vendor, cybersecurity harnesses)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **49.4%** (AA via BenchLM — above the 40% frontier reference)
- LCR: **86.3%** (AA via BenchLM)
- MLCR: **18.3%** (AA via BenchLM)
- CritPt: **26.6%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **46** — **#1/116 in the large open-weights class** (median 18) (AA; BenchLM lists 46.3)
- Omniscience Accuracy / Hallucination Rate: **34.8% / 40.6%** (Index 8.4) (AA via BenchLM)

Coding:

- DeepSWE v1.1: **71.9%** (vendor; vs Opus 5 74.0, GPT-5.6 Sol 73.0 — near-frontier)
- MiMo Code Bench: **63.2%** (vendor; vs Opus 5 68.6)
- ProgramBench: **26.5%** (vendor)
- SciCode / AA-SciCode: **60.9%** (AA via BenchLM — above the 55% frontier reference)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- No public MRCR / RULER / GraphWalks number at 1M. Closest proxy: AA-LCR **86.3%** (long-context reasoning — the strongest LCR in this report set). 1M limit verified architecturally.

Multimodal (grounded):

- MiMo VisualCoding: **72.3%** (vendor; vs GPT-5.6 Sol 73.4)
- Design Arena Website: **1325 Elo** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 89.9% is in the frontier band and OSWorld 82.0 / Toolathlon 76.9 / GDPval 1673 / ALE 31.6 all sit at or near Opus-5 level; capped by weak TB4.0 (34.9%), GDP.pdf (19.2%) and missing Tau3/Claw data.
- **Reasoning: 76/100.** HLE 49.4% clears the 40% frontier reference, LCR 86.3% is excellent and AA Index 46 leads all open-weights models; capped by CritPt 26.6%, MLCR 18.3%, a 40.6% hallucination rate and missing GPQA.
- **Context window: 95/100.** Native 1M with 128K max output (≥1M tier); no public ≥512K retrieval benchmark (MRCR/RULER) to justify 100.
- **Multimodal: 90/100.** AA-verified omnimodal input (text/image/speech/video) with MiMo VisualCoding 72.3% and Design Arena 1325 Elo; capped by text-only output.
- **Coding: 82/100.** DeepSWE 71.9% is near Opus-5 frontier level (74.0), SciCode 60.9% clears the frontier reference and TB2.1 89.9% doubles as a coding-agent score; capped by ProgramBench 26.5% and no verified SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 93/100.** $0.435/$0.87 with 99% cache discount and ~$0.13/task (blended ~$0.18/1M) beats the $0.60/$2.20 (~92) reference; input price sits slightly above its class median, keeping it below the 97+ ultra-budget band.
- **Overall Score: 86/100.** (87 + 76 + 95 + 90 + 82) / 5 = 86.0 → 86. Best-fit recommendation: the strongest open-weights agent buy right now — frontier-adjacent tool use, coding and HLE at MIT-license prices; pair with a faster endpoint when latency matters (46.9 tok/s is slow) and verify knowledge-reliability tasks given the hallucination rate.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (Xiaomi official HF family model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
