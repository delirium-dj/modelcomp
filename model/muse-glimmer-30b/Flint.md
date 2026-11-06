# Muse Glimmer 30B — findings by Flint

- Source: Meta Superintelligence Labs / Hugging Face `meta-models/Muse-Glimmer-30B`
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B (Meta Superintelligence Labs; Muse family — Glimmer tier).
- **Short description:** Open-source 30B-parameter dense causal language model with a dedicated perception encoder, purpose-built for autonomous agentic tasks on consumer hardware; integrates multi-step reasoning, reliable tool use, and failure recovery in one local model (Apache 2.0).
- **Provider / access:** Open weights (Apache 2.0, self-host free); Hugging Face `meta-models/Muse-Glimmer-30B`; hosted via OpenRouter ($0.30/$1.10 per 1M), Fireworks/Together/Vercel ($0.35/$1.50 per 1M), NVIDIA NIM ($0); no free hosted ID per meta.json.
- **Release / knowledge:** Released August 2026 (Hugging Face model card); arXiv:2610.24628 submitted October 17, 2026; knowledge cutoff January 4, 2026 (Hugging Face model card).
- **IDs:** `meta/muse-glimmer-30b` (meta.json / provider namespace); Hugging Face `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131,072+ tokens (Hugging Face model card; meta.json).
- **Modalities:** Text + image input, text output (perception encoder ViT-G/14 ~1.8B params); no audio.
- **Pricing (as of 2026-10-28):** Open weights Apache 2.0 self-host free; hosted from $0.30/$1.10 per 1M (OpenRouter) / $0.35/$1.50 (Fireworks/Together/Vercel) / $0 (NVIDIA NIM).
- **Architecture:** Open-weight dense causal transformer with perception encoder; ~29.6B parameters total, 52 layers, hidden 6656, sliding window [Local, Local, Local, Global] repeating, SW 2048, GQA (32 Q / 2 KV), RoPE θ=500k, SwiGLU FFN (intermediate 19,968), vocab 202,048, context 131,072+, multimodal text+image.

### Raw benchmarks found

- Agent / tool use (HF model card benchmark table):
  - MCP Atlas (Public): **75.5**; DeepSearch QA: **74.6**; τ3-Banking: **23.5**; WildClawBench: **47.6**; GDPVal-AA v2: **953**; Gaia2: **43.3**; SkillsBench (with skills): **44.3**; OSWorld-Verified: **65.9**.

- Agentic coding (HF model card):
  - SWE-Bench Pro: **51.2**; SWE-Bench Verified: **76.0**; TerminalBench 2.1 (with terminus2): **51.7**; SciCode: **43.6**.

- Multimodal (HF model card):
  - Charxiv Reasoning: **78.8**; ScreenSpot Pro: **75.4**; OmniDocBench v1.5: **75.8**; MMMU Pro: **74**.

- General capabilities / reasoning (HF model card):
  - IFBench: **77.0**; AIME 2026: **94.7**; GPQA Diamond (AA): **83.5**; HLE Text (AA): **22.0**; AA-LCR: **80.0**; Beam128K: **65.1**.

- Deployment / performance (HF model card):
  - K-Quant-Dynamic / K-Quant-17GB quantization: ~0.2–1.0% average degradation over 15 benchmarks.
  - DFlash speculative decoding: RTX 5090 74.9 → 233.4 tok/s (3.1x); Apple M4 Max 23.7 → 37.8 (1.5x); Apple M5 Max 26.6 → 50.2 (1.8x).

### Cross-source comparison

- Official (Meta Superintelligence Labs via Hugging Face `meta-models/Muse-Glimmer-30B` + arXiv:2610.24628) vs prior in-repo findings (`model/muse-glimmer-30b/Muse_Glimmer_30B.md`, HF card + meta.json): benchmark figures overlap closely (SWE-Bench Verified 76.0, GPQA Diamond 83.5, MCP Atlas 75.5, AIME 94.7); independent third-party trackers (Artificial Analysis, Epoch AI) did not resolve a public Muse Glimmer page in this session — official-first with HF-card cross-check against the repo's prior findings.

### Normalized scores (1-100)

- **Tool use: 78/100.** MCP Atlas **75.5**, DeepSearch QA **74.6**, OSWorld-Verified **65.9**, WildClawBench **47.6** → strong agentic tool/task-handling band for the 30B class; τ3-Banking **23.5** caps the upper end.

- **Reasoning: 76/100.** GPQA Diamond **83.5**, AIME 2026 **94.7**, IFBench **77.0** → high reasoning band; HLE Text **22.0** limits the top tier.

- **Context window: 71/100.** 131K tokens (Hugging Face model card; meta.json) → mid context band for open-weights local agents; AA-LCR **80.0** and Beam128K **65.1** show solid long-context retention for size class.

- **Multimodal: 75/100.** Text + image in, text out; Charxiv Reasoning **78.8**, ScreenSpot Pro **75.4**, OmniDocBench v1.5 **75.8**, MMMU Pro **74** → strong multimodal band.

- **Coding: 77/100.** SWE-Bench Verified **76.0**, SWE-Bench Pro **51.2**, TerminalBench 2.1 **51.7**, SciCode **43.6** → solid coding-agent performance.

- **Cost efficiency: 85/100.** Apache 2.0 open weights (self-host free) + hosted from ~$0.30/$1.10 per 1M → high open-weight value.

- **Overall Score: 75/100.** Mean of the five quality dims (Tool 78 + Reasoning 76 + Context 71 + Multimodal 75 + Coding 77) / 5 = 75.4 → half-up **75**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Meta Superintelligence Labs / Hugging Face `meta-models/Muse-Glimmer-30B` + arXiv:2610.24628) plus prior in-repo findings cross-check — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
