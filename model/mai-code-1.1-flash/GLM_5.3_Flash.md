# MAI-Code-1.1-Flash — findings by GLM 5.3 Flash

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's lightweight, agentic coding model (released 2026-10-07), successor to MAI-Code-1-Flash: higher-quality code at 25% greater token efficiency and a quarter of the cost, built into GitHub Copilot and VS Code, with CLI/.NET focus, image+PDF input, and local download. BenchLM lists 3 model-card rows (unranked publicly, 4 days post-release).
- **Provider / access:** GitHub Copilot (experimental access across the Copilot app, Copilot CLI, and VS Code by end of October 2026); Azure serving; OpenCode Zen `opencode/mai-code-1.1-flash`. Available to download and run locally (3-bit quantization; Microsoft recommends >120GB RAM); zero inference charges for local model calls.
- **Release / knowledge:** Released 2026-10-07 (microsoft.ai announcement; predecessor MAI-Code-1-Flash launched 2026-06-02 at Microsoft Build); knowledge cutoff not published. Official model card: microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF.
- **IDs:** `opencode/mai-code-1.1-flash` (Zen, no Free ID); GitHub Copilot model picker / auto picker route.
- **Context window:** 256,000 tokens total (BenchLM concurs), 128,000 max output (meta-verified; the 3-bit on-device build retains the full 256K window).
- **Modalities:** Text, image, PDF in → text out (takes image inputs and reasons over image contents); reasoning yes (adaptive thinking — concise for simple requests, more budget for complex tasks); tool calls yes (agentic coding in the GitHub Copilot harness); JSON mode not documented.
- **Pricing (as of 2026-10-11):** $0.20 in / $1.20 out per 1M (GitHub Copilot), cached input $0.02 — a quarter of MAI-Code-1-Flash's launch price; local calls free.
- **Architecture:** Proprietary weights for cloud serving (locally downloadable 3-bit quantized build); ~138B parameters (LLMLearner catalog); trained from the ground up on clean, traceable, enterprise-grade data without third-party distillation; adaptive solution length control; trained across hundreds of thousands of reinforcement-learning environments in GitHub Copilot.

### Raw benchmarks found

> Second-pass fill (2026-10-11): the freshly fetched BenchLM page surfaces two absolute values from the official Microsoft model card that the prior pass lacked (it had only relative gains) — Terminal-Bench 2.1 62.9% and SWE-bench Verified 72.6%.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft model card via benchlm.ai, 2026-10-10 — fills the "relative +22% only" gap with the absolute value; implies MAI-Code-1-Flash was ~51.6%)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Toolathon / MCP-Atlas: no verified public score found
- Production metrics: code survival +4%, return visits +9% (Microsoft, GitHub Copilot production — prior pass)

Reasoning / knowledge:

- GPQA Diamond / HLE: no verified public score found
- Adversarial-reasoning benchmark (186 questions, 34 categories, Microsoft-internal): predecessor MAI-Code-1-Flash reached **85.8%** adjusted accuracy — 1.1 inherits the training line but no 1.1-specific value published
- Artificial Analysis Intelligence Index / BenchLM overall: **3 source-displayable rows, no public overall score (unranked)** (benchlm.ai updated 2026-10-10)

Coding:

- SWE-bench Verified: **72.6%** (Microsoft model card via benchlm.ai — fills the "comparable coding performance, no absolute value" gap with a strong mid-frontier number)
- SWE-Bench Pro: predecessor MAI-Code-1-Flash scored **51.2%** vs Claude Haiku 4.5's 35.2% (+16 pts) in Microsoft's production harness (June 2026); no 1.1-specific SWE-Pro value published
- Terminal-Bench 2.1: **62.9%** (as above; the prior +22%-over-1.0 and +15% .NET relative claims are now anchored)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Efficiency: 25% fewer tokens per task, tokens stream 25% faster than 1.0

Long context:

- No long-context retrieval reported (256K window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 68/100.** (Was 55 on the prior pass.) Terminal-Bench 2.1 62.9% is now an absolute measured value (was relative-only), placing the agentic-CLI story on solid ground; missing Tau3/GDPval rows keep it under 75.
- **Reasoning: 58/100.** No GPQA/HLE/composite value for 1.1; the predecessor's 85.8% adjusted accuracy on Microsoft's adversarial benchmark is the closest verified anchor (provisional), with adaptive thinking and strong multi-turn instruction-following supporting a low-mid score — unchanged.
- **Context window: 77/100.** Documented 256K tokens (BenchLM concurs; 200K–500K tier = 65–84; 256K ≈ 77) retained even in the on-device 3-bit build; no retrieval percentages published.
- **Multimodal: 78/100.** Text, image and PDF input with image-content reasoning maps to the +PDF-in 75–90 band; no audio/video input documented, which caps it in the high 70s.
- **Coding: 76/100.** (Was 65 on the prior pass.) SWE-bench Verified 72.6% (model card) is the decisive fill — a strong mid-frontier agentic-coding number on top of the predecessor's SWE-Pro 51.2% lineage and the +22% TB2.1/+15% .NET/25%-efficiency gains; LiveCodeBench/SciCode still missing cap it below 80.
- **Cost efficiency: 95/100.** $0.20/$1.20 per MTok with $0.02 cached input — near the ~$0.10/$0.20 ≈ 97–99 band; a quarter of 1.0's price plus zero inference charges for local model calls.
- **Overall Score: 71.4/100.** (Was 66.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (68 + 58 + 77 + 78 + 76) / 5 = 357/5 = 71.4 — raised on the 2026-10-11 second pass as the model-card absolutes (TB2.1 62.9%, SWE-V 72.6%) convert the relative-gain framing into measured evidence. Best fit: high-volume Copilot/CLI coding assistance and .NET work at very low cost — now a genuinely measured mid-frontier coder; not for frontier reasoning or deep multimodal workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai MAI-Code-1.1-Flash page citing the official Microsoft model card PDF, the prior 2026-10-08 pass on microsoft.ai/GitHub repo/LLMLearner, meta specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
