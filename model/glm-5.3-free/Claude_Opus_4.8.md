# GLM 5.3 Free — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.3-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE, offered on a Free Zen promotional tier — same weights as paid GLM 5.3, text-only. Top use case: free agentic software development.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Free Zen tier); open weights (`zai-org/GLM-5.3`). No paid Free ID required.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-free` (Free Zen ID present).
- **Context window:** 204K (per curated `meta.json`).
- **Modalities:** text in; text out (reasoning); tool calls yes.
- **Pricing (as of 2026-10-03):** Free OpenCode Zen promotional tier; otherwise paid/self-host.
- **Architecture:** 753B total / 40B active MoE, open weights.

### Raw benchmarks found

> Benchmarks are GLM 5.3 (same weights); verified numbers from the Z.AI GLM-5.3 model card + AA.

Agent / tool use:

- Terminal-Bench 2.1 **88.2%**; CyberGym **84.5%**; Toolathlon-Verified **73.0%**; GDPval-AA **1769 Elo**
- AA Agentic Index **53.4%**; AA AutomationBench **62.2%**; AA Tau3-Banking **50.3%**; HLE w/ tools **62.5%**

Reasoning / knowledge:

- AA Intelligence Index **44.8**; GPQA Diamond **91.7%**; MMLU-Pro **86.8%** (Vals); AA-LCR **79.7%**; AA-HLE **42.3%**; CritPt **19.1%**; MLCR-AA 48.3%

Coding:

- SWE-bench **95.4%** (Vals); Terminal-Bench 2.1 **88.2%**; DeepSWE **66.9%**; FrontierSWE **78.1%**; AA Coding Index **74.8%**; VulcanBench v3 **78.3%**

Multimodal:

- Text-only (no verified image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 88.2%, GDPval 1769, CyberGym 84.5%, AA Agentic Index 53.4%; TB4.0 41.9% caps the top.
- **Reasoning: 87/100.** AA Index 44.8, GPQA-D 91.7%, AA-LCR 79.7%, MMLU-Pro 86.8%; CritPt 19.1% caps it.
- **Context window: 88/100.** 204K with AA-LCR 79.7% (the 200K–500K tier).
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input.
- **Coding: 88/100.** SWE-bench 95.4%, TB2.1 88.2%, FrontierSWE 78.1%, Coding Index 74.8%, VulcanBench 78.3%.
- **Cost efficiency: 100/100.** Free OpenCode Zen promotional tier ($0).
- **Overall Score: 73.2/100.** Half-up mean of the five quality dims (88/87/88/15/88). A top open-weights agentic-coding model, free on Zen; text-only caps Overall sharply.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.3 model card, Artificial Analysis, BenchLM, Vals AI). Benchmarks are the GLM 5.3 weights (Free tier = same model, $0); normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
