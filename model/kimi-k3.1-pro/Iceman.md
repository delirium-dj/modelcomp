# Kimi K3.1 Pro — findings by Iceman

- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI’s Kimi K3.1 Pro is a post-trained 3T-class model in the K3.1 series with a 1M-token context window, aimed at long-horizon coding, agentic workflows, 3D creation, visual understanding, and knowledge/finance tasks.
- **Provider / access:** Moonshot AI Kimi API (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`) via `https://api.moonshot.ai/v1` (per platform docs). Local metadata lists `opencode/kimi-k3.1-pro` and `noFreeId`.
- **Release / knowledge:** Release date not explicitly stated in the reviewed quickstart page; model documentation current on Kimi platform (2026 context). Knowledge cutoff not clearly extracted in this pass.
- **IDs:** `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`.
- **Context window:** 1,048,576-token context window (Kimi platform docs/pricing). `max_completion_tokens` defaults to 131,072 and can be set up to 1,048,576 (quickstart docs). Local metadata states 1,048,576 combined (max output 131,072 default, configurable higher).
- **Modalities:** Text/image/video input in vision examples and text output (quickstart/docs; local metadata states text/image in, text out).
- **Pricing (as of 2026-11-10):** `kimi-k3.1-pro` $2 / 1M input, $10 / 1M output, $0.20 / 1M cache hit (local metadata/docs context); `kimi-k3.1-pro-highspeed` $4 / 1M input, $20 / 1M output (local metadata). Cache write TTL tiers and batch pricing apply per platform pricing pages.
- **Architecture:** Open-weight 3T-class model lineage per Moonshot materials; parameter/architecture details beyond public descriptions not fully specified in reviewed quickstart.

### Raw benchmarks found

> Verified figures below are from Moonshot AI’s Kimi K3.1 Pro platform documentation/blog-linked materials as presented on the official quickstart page. Some benchmarks are internal/vendor-run or specialized; they are cited as reported by Moonshot.

Agent / tool use:

- Terminal-Bench 4.0 (**coding agents on realistic terminal tasks**, strict task-specific tests): **65.7%** (Moonshot/Kimi docs), compared in text to GPT-6 Astra 58.2% and Claude Opus 5.5 66.4%.
- Kimi Code Bench 3.0 Long-horizon (**internal benchmark**, multi-step execution/tool use/end-to-end problem solving): **61.2%** (Moonshot/Kimi docs), above K3’s 55.95%.
- OfficeQA Pro v2 (**complex fiscal data analysis over real financial documents**): **64.4** (Moonshot/Kimi docs).
- Frontier Finance: improved over K3 (qualitative/comparative claim; no standalone numeric score extracted).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Kimi Hallu Bench Hard (**internal factuality benchmark**): claim-level hallucination rate **8.3%** (down from 23.4% for K3); share of responses with at least one factual error **42.4%** of predecessor rate (Moonshot/Kimi docs; stress-test benchmark).

Coding:

- Terminal-Bench 4.0: **65.7%** (also relevant to coding/agentic coding).
- Kimi Code Bench 3.0 Long-horizon: **61.2%**.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,048,576-token context window documented with long-horizon/agentic use cases; no standalone MRCR/RULER/GraphWalks numeric score found in reviewed sources.

Multimodal / 3D:

- BenchCAD (**3D reconstruction from multi-view renderings via CAD code generation, with tools**): **92.7%** (Moonshot/Kimi docs), compared to Claude Opus 5.5 96.2% and GPT-6 Astra 95.9%.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Several cited benchmarks are vendor-reported/internal; scores are capped for limited breadth of independent standardized evidence.

- **Tool use: 90/100.** Strong agentic/terminal and workflow evidence (Terminal-Bench 4.0 65.7%, Kimi Code Bench 3.0 61.2%, OfficeQA Pro v2 64.4) suggests high tool-use/agent capability; capped by limited standardized third-party tool benchmarks in reviewed sources.
- **Reasoning: 88/100.** Reported gains in knowledge/finance workflows and improved factuality on internal stress tests support strong reasoning/reliability, but canonical public reasoning benchmarks (GPQA/HLE/ARC/AA Index) were not found in this pass.
- **Context window: 96/100.** Verified 1M-token context and configurable large output budget strongly support long-horizon tasks; capped slightly by lack of independent long-context retrieval stress scores.
- **Multimodal: 87/100.** Vision/video-capable inputs in docs and strong 3D/spatial capability evidence (BenchCAD 92.7% with tools) indicate high multimodal/visual reasoning utility; capped by text-only outputs and limited standardized multimodal benchmark breadth.
- **Coding: 91/100.** High reported agentic coding/long-horizon coding results (Terminal-Bench 4.0 65.7%, Kimi Code Bench 3.0 61.2%) indicate strong coding performance; capped by absence of common public coding benchmarks (SWE-bench Verified/LiveCodeBench) in reviewed sources.
- **Cost efficiency: 88/100.** Competitive pricing ($2/$10 standard, $0.20 cache hit; highspeed variant higher) and caching support good value for large-context/agentic workloads.
- **Overall Score: 90/100.** Mean of the five non-cost dims (90, 88, 96, 87, 91) = 90.4 → 90 (half-up). Best fit for long-horizon coding, agentic, and multimodal/3D-assisted workflows where 1M context and vendor-reported strong terminal performance matter.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Moonshot/Kimi platform documentation; scores are normalized 1–100 interpretations from reported figures (including vendor/internal benchmarks), not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro quickstart (Moonshot AI platform docs)](https://platform.moonshot.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Kimi model inference pricing (Moonshot AI platform docs)](https://platform.kimi.ai/docs/pricing/chat)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
