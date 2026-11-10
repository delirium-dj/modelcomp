# Muse Glimmer 30B — findings by Iceman

- Source: Meta Superintelligence Labs/Muse Glimmer 30B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs’ Muse Glimmer 30B is an Apache-2.0 dense multimodal (text+image input) agentic model distilled from Muse Spark, optimized for local deployment on consumer hardware with reasoning, tool use, and long-context capabilities.
- **Provider / access:** Open weights on Hugging Face (`meta-models/Muse-Glimmer-30B`, Apache 2.0) and hosted providers (OpenRouter/Fireworks/Together/Vercel/NVIDIA NIM per metadata). Local metadata lists `meta/muse-glimmer-30b` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (model release August 2026; knowledge cutoff January 4, 2026 per card).
- **IDs:** `Muse-Glimmer-30B`, `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131,072+ tokens (128K default per Meta docs/metadata).
- **Modalities:** Text and image input; text output (HF card). Local metadata states text/image in; text out.
- **Pricing (as of 2026-11-10):** Free open weights for self-hosting (Apache 2.0). Hosted pricing varies (OpenRouter $0.30/$1.10 per 1M, Fireworks/Together/Vercel $0.35/$1.50, NVIDIA NIM $0 per local metadata).
- **Architecture:** Dense causal transformer (~29.6B total, including ~1.8B ViT-G/14 perception encoder), 52 layers, hybrid local/global attention, GQA, SwiGLU, RoPE on local layers, 131K+ context, DFlash speculative decoding support (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `meta-models/Muse-Glimmer-30B` (Muse Glimmer-30B High Reasoning column) unless noted.

Agent / tool use:

- MCP Atlas (Public): **75.5**
- DeepSearch QA: **74.6**
- τ3-Banking: **23.5**
- WildClawBench: **47.6**
- GDPVal-AA v2: **953**
- Gaia2: **43.3**
- SkillsBench (with skills): **44.3**
- OSWorld-Verified: **65.9**

Reasoning / knowledge:

- AIME 2026: **94.7**
- GPQA Diamond (AA): **83.5**
- HLE Text (AA): **22.0**
- AA-LCR: **80.0**
- IFBench: **77.0**

Coding:

- SWE-Bench Pro: **51.2**
- SWE-Bench Verified: **76.0**
- TerminalBench 2.1 (with terminus2): **51.7**
- SciCode: **43.6**

Long context:

- Beam128K: **65.1**
- 131K+ context length documented.

Multimodal:

- CharXiv Reasoning: **78.8**
- ScreenSpot Pro: **75.4**
- OmniDocBench v1.5: **75.8**
- MMMU Pro: **74**

Security/privacy (not used in core quality scoring):

- CI Memories: Violation 26.4 (↓), Coverage 64.8
- Siren AgentDojo: Attack Success Rate 28.4 (↓), Utility 94.2

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 86/100.** Strong agentic/tool-use performance for a 30B local model (MCP Atlas 75.5, DeepSearch QA 74.6, OSWorld-Verified 65.9, Gaia2 43.3, SkillsBench 44.3, WildClawBench 47.6) indicates reliable multi-step agent workflows.
- **Reasoning: 84/100.** Very strong math/reasoning and instruction-following results (AIME 2026 94.7, GPQA Diamond 83.5, AA-LCR 80.0, IFBench 77.0, HLE Text 22.0) for its size class.
- **Context window: 86/100.** 131K+ context with solid long-context performance (Beam128K 65.1, AA-LCR 80.0) is strong for local/consumer deployment, though below 1M-class leaders.
- **Multimodal: 86/100.** Good multimodal understanding for an on-device-oriented model (CharXiv Reasoning 78.8, ScreenSpot Pro 75.4, OmniDocBench v1.5 75.8, MMMU Pro 74) with image input support.
- **Coding: 84/100.** Solid coding/agentic coding capability (SWE-Bench Verified 76.0, SWE-Bench Pro 51.2, TerminalBench 2.1 51.7, SciCode 43.6) for a 30B dense model.
- **Cost efficiency: 95/100.** Apache 2.0 open weights, local deployability on consumer hardware, and free/low-cost hosted options make it highly cost-efficient.
- **Overall Score: 85/100.** Mean of the five non-cost dims (86, 84, 86, 86, 84) = 85.2 → 85. Best fit for local/self-hosted multimodal agentic workflows, coding assistance, and tool use on consumer hardware.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Muse Glimmer 30B model card (Hugging Face)](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  - Local repository metadata consulted: `model/muse-glimmer-30b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
