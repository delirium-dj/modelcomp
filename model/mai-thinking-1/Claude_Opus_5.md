# MAI-Thinking-1 — findings by Claude Opus 5

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** **Microsoft AI's first in-house reasoning model** — a sparse MoE with roughly **1T total and ~35B active parameters**, built on the **MAI-Base-1** foundation. The detail that makes this model genuinely interesting is how it was built: **"trained from scratch without distillation from third-party models"** (llm-stats), on "enterprise-grade commercially licensed data without third-party distillation" ([LLM Reference](https://www.llmreference.com/model/mai-thinking-1)). In a field where many strong scores are inherited from a larger teacher, every number below is Microsoft's own capability. It targets "frontier reasoning and software engineering work at a mid-weight price point". Distinct model; `mai-code-1-flash` and `mai-code-1.1-flash` have their own folders, the MAI-Voice and MAI-Transcribe lines belong in `models_voice/`, and Phi-4, Fara1.5 and MAI-Cyber-1-Flash are separate models.
- **Provider / access:** **Microsoft AI** (proprietary, closed weights), with third-party routing via **OpenCode Zen**, AIHubMix and others. Announced around **Microsoft Build 2026**.
- **Release / knowledge:** **June 2026** (llm-stats dates it 2026-06-02; BenchLM cites "Microsoft's June 2026 MAI-Thinking-1 technical report and model page"). Knowledge cutoff: no verified public date found.
- **IDs:** `mai-thinking-1` (Microsoft AI, Zen, AIHubMix). **No free tier / no free ID.**
- **Context window:** **256,000 tokens.** ⚠️ **Correcting a figure in this repo's own metadata:** `meta.json` recorded 131,072, but **every source I checked converges on 256K** — [BenchLM](https://benchlm.ai/models/mai-thinking-1) ("a proprietary model with a 256K context window"), MindStudio ("Context Window 256,000 tokens"), LLM Reference ("supports a 256K-token context window") and Creeta's Build 2026 write-up ("a 256K-token context window"). I have corrected the metadata. Max output: no verified public figure found.
- **Modalities:** **Text in → text out only.** No image, audio or video input; no generated media. Reasoning: **yes** — BenchLM describes "an explicit reasoning mode, which can improve complex problem solving while adding latency and token use". Tool calls: yes (BFCL v3 measured below).
- **Pricing (as of 2026-10-08):** **$2.00 / MTok input**, with a **source conflict on output: AIHubMix lists $8.00 / MTok** while this repo's metadata recorded **$10.00**. I could not locate Microsoft's own published rate card to adjudicate, so I report both and have left the metadata figure in place with the conflict documented here. Either way this is a reasoning model, so **thinking tokens bill at the output rate** — the effective cost is well above the headline.
- **Architecture:** **Sparse Mixture-of-Experts, ~1T total / ~35B active**, built on **MAI-Base-1**. Training is unusually well disclosed for a proprietary model: **pretrained from scratch on 8,000 NVIDIA GB200 GPUs on a Microsoft-operated Azure cluster, consuming 30T pretraining tokens plus 3.55T mid-training tokens**. The expert count, layer count and attention configuration are not published.

### Raw benchmarks found

> **All figures trace to Microsoft AI's MAI-Thinking-1 technical report** (`microsoft.ai/pdf/mai-thinking-1.pdf`), aggregated by [BenchLM](https://benchlm.ai/models/mai-thinking-1), which covers 13 of 626 benchmarks and ranks the model **#82 of 891 at 53.23/100**. I attempted to read the technical report directly; it returned unparseable binary, so the figures below are as BenchLM and Benchgen transcribe them from it. **I found no independent Artificial Analysis, Vals AI or other third-party measurement of this model.** The mitigating factor is the no-distillation provenance: these results cannot be inherited capability.

Mathematics — the model's clear strength:

- **AIME 2025: 97%** — near-saturation, and among the highest AIME figures in this dataset
- **AIME 2026: 94.5%**
- **HMMT February 2026: 84.9%**

Coding — an unusually complete set covering all four difficulty tiers:

- **LiveCodeBench v6: 87.7%**
- **SWE-bench Verified: 73.5%**
- **SWE-bench Pro: 52.8%**
- **Terminal-Bench 2.0: 46.0%**

Knowledge and instruction following:

- **MMLU-Pro: 85%**
- **GPQA Diamond: 84.2%** (BenchLM lists the same figure under both GPQA and GPQA-D)
- **IFBench: 85%**

Tool use:

- **BFCL v3: 72.0%** (Benchgen, from the same technical report)

Long context:

- **Graphwalks BFS @ 128K: 90%** — a genuine multi-hop graph-traversal measurement at depth, and a high one. Notably, Microsoft measured at **128K rather than at the full 256K**, so the top half of the window is unmeasured.

**Absent entirely:** no HLE, no ARC-AGI, no CritPt, no MRCR, no AA-LCR, no Omniscience or hallucination measurement, no GDPval, no Toolathlon, no τ²-bench, no AutomationBench, no BrowseComp, and no multimodal benchmark (correctly, since the model is text-only).

### Normalized scores (1–100)

- **Tool use: 66/100.** The evidence is solid but narrow. **BFCL v3 at 72.0%** is a respectable function-calling result, **IFBench at 85%** indicates strong instruction adherence — which matters directly for agent reliability — and **Terminal-Bench 2.0 at 46%** is a good score on a harness that defeats most models. But that is the entire agentic picture: **no GDPval, Toolathlon, τ²-bench, AutomationBench, MCP or BrowseComp figure exists**, so there is no evidence at all about long-horizon multi-step execution, which is precisely what a "thinking" model aimed at agents would need to demonstrate. Scored on three good numbers with a discount for breadth.
- **Reasoning: 82/100.** **AIME 2025 at 97% and AIME 2026 at 94.5%** are near the top of this dataset, **HMMT February 2026 at 84.9%** confirms it is not a single-benchmark artefact, and **GPQA Diamond 84.2% with MMLU-Pro 85%** shows the breadth extends beyond mathematics into graduate science and general knowledge. **The no-distillation provenance is what lifts this score**: trained from scratch on 30T + 3.55T tokens across 8,000 GB200s, these are first-party capabilities rather than compressed teacher outputs, which makes them more likely to generalize. Capped by the complete absence of the benchmarks that stress-test reasoning rather than reward it — **no HLE, no ARC-AGI, no CritPt** — and by having **no hallucination or calibration data whatsoever**, which for a reasoning model sold into enterprise work is a real gap.
- **Context window: 76/100.** **256K tokens** is a solid window, and **Microsoft published a retrieval measurement rather than just a number — Graphwalks BFS at 128K scoring 90%**, which is multi-hop traversal rather than a single-needle lookup and is a strong result at that depth. That is better evidence than most 256K claims in this dataset carry. Two deductions: the measurement stops at **128K, leaving the upper half of the advertised window unverified**, and there is **no MRCR, RULER or AA-LCR figure** to cross-check, nor any published max-output cap.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input and none claimed — Microsoft routes those capabilities to separate models in the MAI family. Template floor; the score reflects scope, not failure.
- **Coding: 82/100.** The most complete coding evidence I have seen from a proprietary vendor in this pass, because it spans the full difficulty ladder rather than cherry-picking one tier: **LiveCodeBench v6 87.7%** (competitive generation), **SWE-bench Verified 73.5%** (real repository patches), **SWE-bench Pro 52.8%** (the harder variant, where 52.8% is genuinely strong), and **Terminal-Bench 2.0 46.0%** (agentic terminal work). Publishing all four, including the two that are less flattering, is good practice and makes the set credible. Capped below the high 80s because nothing is independently verified, there is **no DeepSWE or SWE-bench Multilingual figure**, and Terminal-Bench 46% shows long-horizon terminal work is still mid-field.
- **Cost efficiency: 52/100.** Middling, and the reasoning-model economics are the problem. **$2.00/MTok input with output somewhere between $8.00 and $10.00** puts it at mid-to-upper pricing, and because an explicit reasoning mode bills its thinking at the output rate, real-world cost per task runs well above the sticker. There is **no cached-input discount, no free tier, no open weights and no batch pricing** that I could find. What you get for it is real — AIME 97%, LiveCodeBench 87.7%, SWE-bench Verified 73.5%, GPQA 84.2% — and LLM Reference's "mid-weight price point" framing is fair for a ~1T model. But the value proposition is weaker than open-weight alternatives at similar capability, and the unresolved $8-versus-$10 output conflict means buyers cannot even price it confidently from public sources.
- **Overall Score: 64.2/100.** Mean of the five non-cost dims (66 + 82 + 76 + 15 + 82) / 5 = 64.2. The text-only floor holds the mean down; on reasoning and coding specifically this is a strong model. Best fit: **mathematics, graduate-level science, and repository-scale software engineering** at long context — AIME- and HMMT-class problem solving, GPQA-tier technical Q&A, SWE-bench-style patching, and multi-hop reasoning over large document or graph structures up to about 128K where it is actually measured. The honest caveats are three: **nothing is independently verified**, **there is no hallucination or calibration data at all**, and **long-horizon agentic execution is entirely unmeasured** despite "Thinking" being in the name. The strongest point in its favour is provenance — a frontier-adjacent reasoning model **trained from scratch on commercially licensed data with no third-party distillation** is a meaningfully different proposition from one that inherited its scores, both technically and legally.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated page for `mai-thinking-1` (Proprietary source type, Reasoning type, **256K context**, 13 of 626 benchmarks, overall 53.23 / rank #82 of 891, the explicit-reasoning-mode description, and every benchmark figure with its attribution to Microsoft AI's MAI-Thinking-1 technical report: AIME 2025 97%, AIME 2026 94.5%, Graphwalks BFS 128K 90%, LiveCodeBench v6 87.7%, MMLU-Pro 85%, IFBench 85%, HMMT Feb 2026 84.9%, GPQA Diamond 84.2%, SWE-bench Verified 73.5%, SWE-bench Pro 52.8%, Terminal-Bench 2.0 46%), Benchgen (the additional **BFCL v3 72.0%** figure from the same report), llm-stats (the **~1T-total / 35B-active sparse MoE** specification, the **MAI-Base-1** base model, the **"trained from scratch without distillation from third-party models"** provenance claim, and the June 2026 release date), LLM Reference (the commercially-licensed-data and no-third-party-distillation framing, the 256K context, and the "mid-weight price point" positioning), Creeta's Microsoft Build 2026 write-up (the **8,000 NVIDIA GB200 GPU Microsoft-operated Azure cluster, 30T pretraining tokens and 3.55T mid-training tokens**), MindStudio (independent 256K context confirmation), and AIHubMix ($2/M input, **$8/M output**). I attempted to fetch Microsoft's technical report PDF directly; it returned unparseable binary, so report figures are taken as transcribed by BenchLM and Benchgen, and this is stated rather than implied. **Two discrepancies are reported explicitly:** this repo's `meta.json` recorded a **131,072-token context window that four independent sources contradict with 256K** — I corrected it — and the **output price conflicts between AIHubMix's $8.00 and the metadata's $10.00**, which I left unresolved and flagged rather than silently picking one. **No independent third-party measurement of this model exists that I could find**, and that limitation is stated; the no-distillation provenance is noted as a reason the vendor figures are more likely to reflect genuine generalization, not as a substitute for verification. Absent evidence is named, not filled: no HLE, ARC-AGI, CritPt, MRCR, AA-LCR, hallucination/Omniscience, GDPval, Toolathlon, τ²-bench, AutomationBench, BrowseComp, DeepSWE or max-output figure, and no measurement above 128K despite a 256K window. No data was imported from `mai-code-1-flash` or `mai-code-1.1-flash`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
