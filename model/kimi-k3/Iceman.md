# Kimi K3 — findings by Iceman

- Source: Moonshot AI/Kimi K3
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI’s Kimi K3 is a 2.8T-parameter open-weight flagship model with native vision and a 1M-token context window, designed for long-horizon coding, knowledge work, and reasoning/agentic workflows.
- **Provider / access:** Moonshot AI Kimi app/products and Kimi API (`kimi-k3`) via `https://api.moonshot.ai/v1` (per platform docs/blog). Local metadata lists `moonshotai/kimi-k3` and `noFreeId`.
- **Release / knowledge:** Introduced in Moonshot/Kimi materials in 2026 (blog states weights release timeline around July 27, 2026 in that context); knowledge cutoff not clearly extracted in this pass.
- **IDs:** `kimi-k3`.
- **Context window:** 1,048,576-token context window (Kimi platform docs/pricing). `max_completion_tokens` defaults to 131,072 and can be set up to 1,048,576 (quickstart docs). Local metadata states 1,048,576 (1M) in / 1M out.
- **Modalities:** Text, image, and video/document-style visual inputs supported in platform vision examples; text output (docs/blog). Local metadata states text, image, document in; text out.
- **Pricing (as of 2026-11-10):** $3.00 / 1M cache-miss input, $0.30 / 1M cache-hit input, $15.00 / 1M output (Kimi blog/API availability section); cache write TTL tiers per pricing docs.
- **Architecture:** 2.8T-parameter MoE model built on Kimi Delta Attention (KDA), Attention Residuals (AttnRes), and Stable LatentMoE (activating 16 of 896 experts), with MXFP4/MXFP8 quantization-aware training noted in blog.

### Raw benchmarks found

> Verified figures below are from Moonshot AI’s Kimi K3 blog/platform materials as accessible in this pass. Some benchmark presentations are image-heavy/comparative; only clearly stated numeric values in text/footnotes are cited.

Agent / tool use:

- BrowseComp: **90.4** (Kimi blog footnote states K3 achieves 90.4 with 1M-token context window and no context management; other reported settings use context compaction).
- MCP Atlas / AutomationBench / APEX-Agents / GDPval-AA / AA-Briefcase: benchmarked/evaluated per footnotes, but Kimi K3’s specific numeric scores were not clearly extractable from accessible text in this pass.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (clearly extracted)
- HLE: **no verified public score found** (clearly extracted)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE: **67.3** with mini-SWE-agent harness (Kimi blog footnote 1).
- Terminal-Bench 2.1 / SWE Marathon / FrontierSWE / PostTrain Bench / MLS Bench Lite / KCB 2.0: evaluated per blog/footnotes, but specific Kimi K3 numeric scores not clearly extractable from accessible text in this pass.
- SWE-bench Verified / SWE-Pro: **no verified public score found** (clearly extracted)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1,048,576-token context window documented; BrowseComp 90.4 reported with 1M context and no context management (footnote). No standalone MRCR/RULER/GraphWalks numeric score clearly extracted.

### Normalized scores (1–100)

> Derived from limited but verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Many benchmark results were not clearly extractable as text in this pass; scores are conservative.

- **Tool use: 87/100.** Verified strong agentic/search performance signal (BrowseComp 90.4 in 1M no-compaction setting) and broad agentic/productivity benchmark coverage in the blog suggest capable tool use; capped by sparse clearly extracted numeric tool-benchmark scores.
- **Reasoning: 84/100.** Positioned for frontier reasoning/knowledge work with large-scale architecture and agentic evaluations, but few canonical public reasoning benchmark numbers were clearly extractable in this pass.
- **Context window: 96/100.** Verified 1M-token context and demonstrated high BrowseComp performance with 1M context/no compaction support excellent long-context utility; capped by limited extracted retrieval-stress metrics.
- **Multimodal: 85/100.** Native vision/multimodal understanding is documented with visual coding/research use cases and image/video inputs in docs; capped by text-only outputs and limited extracted multimodal benchmark numbers.
- **Coding: 88/100.** Verified DeepSWE 67.3 (mini-SWE-agent harness) and extensive coding benchmark participation indicate strong coding capability; capped by limited clearly extracted numeric scores across other coding benchmarks.
- **Cost efficiency: 82/100.** Pricing ($3/$15, $0.30 cache-hit input) is competitive for a large flagship open-weight-style API offering but above lower-cost tiers.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87, 84, 96, 85, 88) = 88.0 → 88. Conservative score reflecting strong context/coding/agent positioning with limited clearly extractable public numeric evidence in this pass.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Moonshot/Kimi blog and platform docs; scores are normalized 1–100 interpretations from clearly extracted figures and constrained by limited numeric extraction.
- Reference URLs:
  - [Kimi K3: Open Frontier Intelligence (Kimi blog)](https://www.kimi.com/blog/kimi-k3)
  - [Kimi K3 quickstart (Moonshot AI platform docs)](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [Kimi model inference pricing (Moonshot AI platform docs)](https://platform.kimi.ai/docs/pricing/chat)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
