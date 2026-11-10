# Claude Mythos 5.2 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, security-vetted configuration of Fable 5.2, sharing identical architecture but with lifted dual-use refusals for authorized defensive cyber and biosecurity research. Released November 9, 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-mythos-5.2`), also via Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Strictly restricted to organizations verified through Anthropic's Cyber Verification Program (CVP) and Life Sciences Verification Program (Project Glasswing). Not available to general API consumers.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5.2` (no Free ID exists; access restricted to CVP/Glasswing-verified orgs)
- **Context window:** 1,000,000 tokens input / 128,000 tokens output — confirmed by Anthropic docs.
- **Modalities:** Text + image in; text out. Adaptive "Thinking" mode always on (high default effort, configurable: low/medium/high/xhigh/max). Tool calls, JSON mode supported.
- **Pricing (as of 2026-11-10):** $8–$10/1M input, $40–$50/1M output, cache read $0.20/1M. Fast Mode available at $16/$80 per 1M tokens. Paid only, restricted access.
- **Architecture:** Proprietary. Same underlying model weights as Claude Fable 5.2 — differs only in safety configuration (permissive guardrails for verified defensive research). No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (safeguards off): **70.5%** (llm-stats.com; compared to Fable 5.2's 67.6% with safeguards active)
- Terminal-Bench-Science 0.1: **75.3%** (Anthropic System Card)
- FrontierCode 2.0: **49.1%** at Xhigh effort (shared Fable 5.2 architecture, Anthropic)
- FrontierSWE v2: **69.9%** (datacamp.com evaluation)
- BenchCAD 2.1: **83.5%** (shared architecture with Fable 5.2)
- CVE Rediscovery / ExploitBench / CyScenarioBench / ExploitGym: evaluated under safeguards-off config (specific scores not publicly disclosed)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~93–96%** (shared architecture with Fable 5.2, near saturation; range across effort levels)
- HLE (tools-enabled): **~74.2%** (datacamp.com / Artificial Analysis)
- HLE-Diamond Overall: **~80%** at Max effort (shared architecture with Fable 5.2, Artificial Analysis)
- Artificial Analysis Intelligence Index: **~65** (shared architecture)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Pro: **93.0%** (claude.com; compared to 89.9% for Opus 5.5 and 81.2% for Fable 5.1)
- SWE-bench Multimodal: **62.3%** (shared architecture with Fable 5.2)
- LiveCodeBench: predecessor Fable 5.1 scored ~90.5%; exact Mythos 5.2 standalone number not found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window confirmed. No specific MRCR/RULER/GraphWalks retrieval numbers found. Prior Claude models demonstrate strong long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 70.5% (safeguards off, higher than Fable's 67.6%), Terminal-Bench-Science 75.3%, FrontierCode 49.1%, FrontierSWE 69.9%, BenchCAD 83.5%. The unrestricted safety config yields top marks on security-oriented agentic tasks. Among the strongest tool-use profiles available. Capped only by the absence of Toolathon/MCP-Atlas scores.
- **Reasoning: 95/100.** GPQA Diamond ~93–96% (near saturation), HLE ~74.2% (tools-enabled), HLE-Diamond ~80% at Max effort. Identical frontier architecture to Fable 5.2. Capped by no independent standalone GPQA breakdown for Mythos specifically.
- **Context window: 92/100.** 1M token input (highest commercial tier), 128K output. No specific long-context retrieval benchmark published, which slightly caps the score.
- **Multimodal: 65/100.** Text + image input; text-only output. Strong vision for schematics/PDFs (shared BenchCAD 83.5%), but no audio/video input and no image/audio output. Capped by output-side limitations.
- **Coding: 95/100.** SWE-bench Pro 93.0% (top-tier, surpassing Opus 5.5 at 89.9%), FrontierSWE 69.9%, FrontierCode 49.1%. Unrestricted access to code execution and system interactions lifts coding capability beyond standard Fable. Capped minimally — this is among the best coding models available.
- **Cost efficiency: 28/100.** $8–$10/$40–$50 per 1M tokens (with Fast Mode at $16/$80). No free tier. Restricted access adds organizational overhead. Premium pricing for specialized use.
- **Overall Score: 88/100.** Mean of (93 + 95 + 92 + 65 + 95) / 5 = 88.0. A peak frontier model sharing Fable 5.2's architecture with lifted safety guardrails, yielding marginally higher agentic/coding scores. Held back from the highest overall by text+image-only multimodal and restricted access.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (Anthropic System Card, claude.com, llm-stats.com, datacamp.com, Artificial Analysis, eigent.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5.2 announcement](https://www.anthropic.com/news/claude-mythos-5.2)
  - [Anthropic — Pricing](https://www.anthropic.com/pricing)
  - [llm-stats.com — Terminal-Bench scores](https://llm-stats.com)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai)
  - [datacamp.com — Fable/Mythos 5.2 evaluation](https://datacamp.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
