# Ling 3.2 Flash — findings by Claude Opus 4.6

- Source: Ant Group / Ant Bailing (`ling-3.2-flash`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's native multimodal Mixture-of-Experts model (560B total / 25B active), released November 5, 2026. Specializes in complex visual understanding, long-horizon multimodal agents, 3D spatial reasoning, and medical imaging — outperforming Claude Opus 5 on key vision benchmarks.
- **Provider / access:** Ant Bailian platform (`ling-3.2-flash`). Compatible with OpenAI and Anthropic API protocols including tool use.
- **Release / knowledge:** 2026-11-05; knowledge cutoff not publicly stated.
- **IDs:** `ant/ling-3.2-flash`
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, video in (native end-to-end multimodal); text out; configurable thinking tokens; tool use / function calling.
- **Pricing (as of 2026-11):** $0.30 / $0.90 per 1M tokens in/out. Highly cost-competitive for its capability class.
- **Architecture:** 560B total parameters, 25B active per forward pass. Sparse MoE. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Vision2Web: **85.86** (aibase.com — outperforming Claude Opus 5 max at 80.20; web interaction/UI agent task)
- DesignArena (Image-to-Frontend): **Elo 1238**, top-10 placement (aibase.com — on par with Meta, DeepSeek, Anthropic frontier models)
- Tool use / function calling: natively supported with OpenAI/Anthropic protocol compatibility; configurable thinking tokens (reddit.com)
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ZEROBench (Sub): **43.71** (aibase.com — outperforming Claude Opus 5 max at 39.52; complex visual reasoning)
- OmniDocBench 1.5: **92.21** (aibase.com — outperforming Claude Opus 5 max at 90.56; document understanding)
- GPQA Diamond: no verified public score found (not part of primary launch disclosures)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Visual coding / UI-to-frontend: competitive via DesignArena (Elo 1238, top-10)

Long context:

- 1M-token context window with native multimodal support. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 68/100.** Native function calling with OpenAI/Anthropic protocol compatibility; Vision2Web 85.86 outperforms Claude Opus 5 on web interaction tasks; DesignArena top-10 shows strong UI agent capability. Capped by lack of standard terminal/tool-use benchmarks (Terminal-Bench, Tau, MCP-Atlas).
- **Reasoning: 62/100.** ZEROBench 43.71 and OmniDocBench 92.21 beat Claude Opus 5 max on multimodal reasoning tasks. However, no GPQA Diamond or HLE scores published — visual reasoning benchmarks are strong but text-only reasoning capability is unproven. Capped by missing standard academic reasoning metrics.
- **Context window: 95/100.** 1M tokens — among the largest in production. Tier-mapped to 95 for 1M window.
- **Multimodal: 85/100.** Native end-to-end multimodal for text + image + video input. Excels in complex visual understanding, 3D spatial reasoning, and medical imaging. Outperforms Claude Opus 5 on vision benchmarks. No audio input or image/video generation. Capped by text-only output.
- **Coding: 55/100.** DesignArena Elo 1238 (top-10) for image-to-frontend shows visual coding capability. However, no SWE-bench, LiveCodeBench, or standard coding benchmarks published. Being evaluated in agentic coding loops but unproven on standard code generation metrics. Capped by zero verified coding benchmarks.
- **Cost efficiency: 88/100.** $0.30/$0.90 per 1M tokens is very affordable for a 560B-parameter model with 1M context and multimodal capabilities. Exceptional value relative to performance class.
- **Overall Score: 73/100.** Mean of (68 + 62 + 95 + 85 + 55) / 5 = 73.0. A standout multimodal vision model that beats Claude Opus 5 on document/web/visual reasoning benchmarks at a fraction of the cost, but held back by unproven text-only reasoning and coding capabilities on standard academic benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official announcements, benchmark comparisons, and API documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [AIBase — Ling 3.2 Flash Benchmark Report](https://aibase.com)
  - [TechNode — Ant Group Ling 3.2 Flash Release](https://technode.com)
  - [Ant Ling — Official Model Platform](https://ant-ling.com)
  - [Reddit — Ling 3.2 Flash Agent Integrations](https://reddit.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
