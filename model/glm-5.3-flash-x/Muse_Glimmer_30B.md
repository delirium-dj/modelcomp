# GLM-5.3 FlashX — findings by Muse Glimmer 30B

- Source: Zhipu AI / glm-5.3-flash-x
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** High-speed inference variant of GLM-5.3-Flash, first natively multimodal model in GLM-5 series for professional work beyond coding with native visual coding, Office/document workflows and long-context multimodal reasoning.
- **Provider / access:** Zhipu AI / Z.ai. API `glm-5.3-flashx` / `glm-5.3-flashx-legal` on Z.ai Open Platform. Alibaba Model Studio `ZHIPU/GLM-5.3-FlashX`. Open weights MIT on Hugging Face `zai-org/GLM-5.3-Flash`.
- **Release / knowledge:** GLM-5.3-Flash public reveal 26 Aug 2026, stealth codename Ox Alpha. FlashX API launched 18 Sep 2026. Knowledge cutoff not published.
- **IDs:** API `glm-5.3-flashx`, `glm-5.3-flashx-legal`; HF `zai-org/GLM-5.3-Flash`
- **Context window:** 1M tokens input; max output 128K /131072 tokens
- **Modalities:** Input: Video / Image / Text / File → Output: Text. Natively multimodal.
- **Pricing as of 2026-10-24:** China Beijing region RMB per 1M tokens.
  - Input 2 CNY, Output 7 CNY, Input Implicit Cache 0.57 CNY
  - Base Flash reported in guides $0.15 input / $0.50 output; FlashX ~2.5× higher for speed.
- **Architecture:** 320B total parameters, 18B active per forward pass MoE. Hybrid Sparse + Linear Attention, Manifold-Constrained Hyper-Connections mHC, 45 layers, pre-training corpus 30T multimodal tokens. MIT license.

### Raw benchmarks found

**Zhipu benchmark table reproduced on Tosea.ai and Hugging Face eval results for GLM-5.3-Flash**

- Terminal Bench 2.1: 84.3
- DeepSWE v1.1: 63.4
- Agents’ Last Exam: 26.3
- AutomationBench v1.0.6: 48.8
- Humanity’s Last Exam with tools: 55.3
- GDPVal-AA v2: 1773

Methodology notes from HF card: HLE evaluated max context 300K, judge GPT-5.6-luna; DeepSWE mini-swe-agent temp 0.95 400K context 6h timeout; Terminal-Bench in Claude Code 2.1.207.

Sources: https://tosea.ai/blog/glm-5-3-flash-complete-guide ; https://docs.z.ai/guides/vlm/glm-5.3-flash ; https://help.aliyun.com/en/model-studio/glm-5-3-flashx-by-zhipu ; https://huggingface.co/zai-org/GLM-5.3-Flash

**Conflicts / notes**
- Pricing quoted in USD for Flash tier in Western guides and CNY/RMB for FlashX on Alibaba. FlashX is speed-optimized inference stack.
- Inference speed up to 200 tokens/s for FlashX vs ~40 tokens/s for Flash per TodayforAI/Alibaba.
- Benchmarks are from Zhipu own chart and HF eval results; no independent Terminal-Bench/LiveCodeBench/SWE-bench runs for FlashX specifically located.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal Bench 2.1 84.3, AutomationBench 48.8, Agents’ Last Exam 26.3.
- **Reasoning: 70/100.** HLE with tools 55.3, GDPVal-AA v2 1773. No HLE no-tools number.
- **Context window: 95/100.** 1M verified.
- **Multimodal: 75/100.** Natively multimodal Video/Image/Text/File input.
- **Coding: 68/100.** DeepSWE v1.1 63.4.
- **Cost efficiency: 65/100.** 2/7 CNY per 1M; ~2.5× base Flash for speed.
- **Overall Score: 76.4/100.** Mean of Tool 74, Reasoning 70, Context 95, Multimodal 75, Coding 68. Fast multimodal MoE with strong terminal tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
