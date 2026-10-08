# MAI-Code-1.1-Flash — findings by GLM 5.3 Flash

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's lightweight, agentic coding model (released 2026-10-07), successor to MAI-Code-1-Flash: higher-quality code at 25% greater token efficiency and a quarter of the cost, built into GitHub Copilot and VS Code, with CLI/.NET focus, image+PDF input, and local download.
- **Provider / access:** GitHub Copilot (experimental access across the Copilot app, Copilot CLI, and VS Code by end of October 2026); Azure serving; OpenCode Zen `opencode/mai-code-1.1-flash`. Available to download and run locally (3-bit quantization; Microsoft recommends >120GB RAM); zero inference charges for local model calls.
- **Release / knowledge:** Released 2026-10-07 (microsoft.ai announcement; predecessor MAI-Code-1-Flash launched 2026-06-02 at Microsoft Build); knowledge cutoff not published.
- **IDs:** `opencode/mai-code-1.1-flash` (Zen, no Free ID); GitHub Copilot model picker / auto picker route.
- **Context window:** 256,000 tokens total, 128,000 max output (meta-verified; the 3-bit on-device build retains the full 256K window).
- **Modalities:** Text, image, PDF in → text out (takes image inputs and reasons over image contents); reasoning yes (adaptive thinking — concise for simple requests, more budget for complex tasks); tool calls yes (agentic coding in the GitHub Copilot harness); JSON mode not documented.
- **Pricing (as of 2026-10-08):** $0.20 in / $1.20 out per 1M (GitHub Copilot), cached input $0.02 — a quarter of MAI-Code-1-Flash's launch price; local calls free.
- **Architecture:** Proprietary weights for cloud serving (locally downloadable 3-bit quantized build); ~138B parameters (LLMLearner catalog); trained from the ground up on clean, traceable, enterprise-grade data without third-party distillation; adaptive solution length control; trained across hundreds of thousands of reinforcement-learning environments in GitHub Copilot.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **+22% improvement** in GitHub Copilot CLI vs MAI-Code-1-Flash (relative gain only — absolute base value not published, so no verified absolute score)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Production metrics: code survival +4%, return visits +9% (Microsoft, GitHub Copilot production)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Adversarial-reasoning benchmark (186 questions, 34 categories, Microsoft-internal): predecessor MAI-Code-1-Flash reached **85.8%** adjusted accuracy — 1.1 inherits the training line but no 1.1-specific value published
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM shows 3 source-displayable rows, no public overall score (benchlm.ai, October 2026)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for 1.1 (predecessor beat Claude Haiku 4.5 with up to 60% fewer tokens on SWE-Bench Verified; 1.1 on-device build shows "comparable coding performance" on SWE-Bench Verified, no absolute value)
- SWE-Bench Pro: predecessor MAI-Code-1-Flash scored **51.2%** vs Claude Haiku 4.5's 35.2% (+16 pts) in Microsoft's production harness (June 2026); no 1.1-specific SWE-Pro value published
- Terminal-Bench 2.1: relative +22% (see above); .NET tasks: **+15%** improvement
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Efficiency: 25% fewer tokens per task, tokens stream 25% faster than 1.0

Long context:

- no long-context retrieval reported (256K window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 improves 22% over 1.0 in the Copilot CLI and instruction-following carries over to agentic tool use, but only relative gains are published — no absolute TB2.1/Tau3/GDPval value, so the score rests on a strong proxy (1.0 beat Claude Haiku 4.5 across the coding harness; 1.1 > 1.0).
- **Reasoning: 58/100.** No GPQA/HLE/composite value for 1.1; the predecessor's 85.8% adjusted accuracy on Microsoft's adversarial benchmark is the closest verified anchor (provisional), with adaptive thinking and strong multi-turn instruction-following supporting a low-mid score.
- **Context window: 77/100.** Documented 256K tokens (200K–500K tier = 65–84; 256K ≈ 77) retained even in the on-device 3-bit build; no retrieval percentages published.
- **Multimodal: 78/100.** Text, image and PDF input with image-content reasoning maps to the +PDF-in 75–90 band; no audio/video input documented, which caps it in the high 70s.
- **Coding: 65/100.** Predecessor's SWE-Bench Pro 51.2% (+16 over Haiku 4.5) plus 1.1's +22% TB2.1, +15% .NET, and 25% token-efficiency gains indicate a solid mid-tier coding model; capped because no absolute 1.1-specific SWE-bench/LiveCodeBench number is published.
- **Cost efficiency: 95/100.** $0.20/$1.20 per MTok with $0.02 cached input — near the ~$0.10/$0.20 ≈ 97–99 band; a quarter of 1.0's price plus zero inference charges for local model calls.
- **Overall Score: 66.6/100.** Mean of the five quality dims (55+58+77+78+65)/5 = 66.6; best fit: high-volume Copilot/CLI coding assistance and .NET work at very low cost — not for frontier reasoning or deep multimodal workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (microsoft.ai launch announcements, GitHub microsoft/MAI-Code repo, BenchLM, LLMLearner, meta specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
