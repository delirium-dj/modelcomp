# MAI-Thinking-1 — findings by Space Bunny

- Source: Microsoft AI (`MAI-Thinking-1`, Microsoft Foundry version 2026-06-01)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's **first in-house reasoning model**, introduced at Build 2026 (**2026-06-02**) and in **public preview on Microsoft Foundry as of 2026-08-12**. A **35B-active / ~1T-total sparse MoE** whose selling point is that the *active* parameter count — not the trillion-parameter headline — drives inference cost, putting frontier-adjacent reasoning and coding at a mid-weight-class price and footprint. It is deliberately built on **clean, licensed, human-generated data with no third-party distillation and no AI-generated content in pre-training**, and Microsoft leans hard on that for enterprise provenance, auditability and control. Top use case: enterprise reasoning, agentic software engineering, and math/science work on Microsoft Foundry/Azure with compliance requirements.
- **Provider / access:** **Microsoft Foundry / Azure AI only** — a single route, "Direct from Azure," **lifecycle: Preview**, catalog version 2026-06-01. It was gated to a Foundry private preview at Build and only opened to public preview on 2026-08-12. OpenAI-compatible **Chat Completions API** (Microsoft describes migration as easy). No OpenRouter, no DeepInfra, no OpenCode Zen ID found.
- **Release / knowledge:** Announced **2026-06-02** (Build 2026); **public preview 2026-08-12**; Foundry catalog version dated 2026-06-01. **Knowledge cutoff: not disclosed.**
- **IDs:** `MAI-Thinking-1` (Microsoft Foundry / Azure AI model catalog)
- **Context window:** **256K tokens** — stated in the technical report as reached *after mid-training*, and confirmed in the Foundry catalog quick facts ("Context window 256k"). Microsoft notes this is "enough to fit a 600 page document." **Token limit: 64,000 output** (Foundry catalog; llmreference concurs). **No long-context retrieval benchmark has been published for this model.**
- **Modalities:** **Text in → text out only.** The Foundry catalog lists `Input type: text` / `Output type: text`; llmreference explicitly advises against using it for "vision or document-understanding workloads." Reasoning: yes — it produces an internal chain of thought before the final response and **allocates reasoning effort adaptively to prompt complexity**. Tool calls / function calling: yes. Developer instructions: supported, and the model was trained to follow multiple layers of instructions.
- **Pricing (as of 2026-10-09):** **No numeric per-token tariff was verifiable.** The Foundry catalog renders its pricing behind a JS-loaded "View pricing" control, and the Azure Foundry pricing pages do not list a MAI row; llmreference's price table was present but its values did not render in the fetched page. Microsoft's own positioning is qualitative and repeated: *"top SWE-Bench Pro results at a **mid-weight price**,"* *"best **price-to-performance ratio** in its weight class,"* and *"cost-efficient reasoning."* Paid only — Preview, no Free tier; Azure also offers PTU reservation and Agent Commit Unit pre-purchase plans. **The cost score below is therefore the least well-evidenced number in this report and is flagged as such.**
- **Architecture:** proprietary closed weights — **weights not released**. Sparse MoE Transformer, **35B active / ~1T total**. Base model: **MAI-Base-1**, pre-trained from scratch on **8K GB200 GPUs** on a Microsoft-operated cluster inside Azure, using in-house distributed training infrastructure. Pre-training corpus: **30T tokens** of publicly available and licensed **human-generated** data — web, public GitHub code, books, academic papers, news, multilingual text, code, academic and PDF content, math/STEM web content, and structured knowledge sources — all processed in-house. Mid-training then emphasized STEM, math and coding ahead of reasoning RL climbs. Post-training: supervised fine-tuning on model-generated completions plus reinforcement learning across **verifiable reasoning, software engineering, tool-use and instruction-following environments**, using **8M+ reinforcement-learning environments**. Notably, **chain-of-thought sequences were length-compressed while preserving task performance**, reducing the token cost of a typical response.

### Raw benchmarks found

> All figures below are **Microsoft-reported** from the 109-page technical report *"MAI-Thinking-1: Building a Hill-Climbing Machine"* (`microsoft.ai/pdf/mai-thinking-1.pdf`) and the launch blog. Microsoft states other models' numbers are taken from their respective official model cards. Third-party rankings are given where they exist.

Reasoning / knowledge:

- **AIME 2025: 97.0%** (technical report + launch blog)
- **AIME 2026: 94.5%** (technical report + launch blog)
- **GPQA Diamond: 84.2%** (technical report)
- MMLU / MMLU-Pro: no verified public score found
- HLE / HLE w/ tools: no verified public score found
- AA-LCR / LongBench v2 / MRCR / RULER: **no verified public score found** — no long-context retrieval measurement exists
- CritPt / Omniscience / hallucination rate: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (llm-stats lists a composite Reasoning index of 33.7 / #87 over 15 evals and an overall 32.9 / #95, but these are low-confidence aggregates, not a published AA Index)
- Internal: Microsoft reports the model is **optimized on MAIA 200**, an internal benchmark, with **30% better performance per dollar** and **1.4× performance-per-watt** versus GB200 when running MAI models end-to-end. No absolute MAIA 200 score is published.

Coding:

- **SWE-bench Pro: 52.8%** — the headline. Microsoft frames this as **within a point of Claude Opus 4.6's 53.4%**; independent ranking puts it **#35 of 46** on llmreference's SWE-bench Pro board (vs Claude Fable 5 80.3, Opus 5 79.2, Opus 4.8 69.2, Qwen3.8-Max 67.7). Also **51.2% vs Claude Haiku 4.5's 35.2%** in Microsoft's own production harness.
- **SWE-bench Verified: 73.5%** — independent rank **#47 of 81**. Microsoft itself concedes Sonnet 4.6 and Opus 4.6 still lead here.
- **LiveCodeBench v6: 87.7%** (technical report)
- **Terminal-Bench 2.0: 46.0%** — Microsoft concedes Anthropic's models still lead here. Terminal-Bench 2.1 / 3.0 / 4.0: no verified public score found
- SWE-bench Multilingual: evaluated by Microsoft in its production harness (beat Haiku 4.5), **no absolute number published**
- SciCode / DeepSWE / Vibe Code Bench / FrontierCode: no verified public score found
- Efficiency claim: Microsoft says the model can solve harder problems with **up to 60% fewer tokens on SWE-bench Verified**

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (see above)
- Function calling: supported and a first-class post-training RL target; tool-use environments are part of the 8M+ RLE set
- Tau3-Banking / Tau2-Bench, GDPval-AA, OSWorld, AutomationBench: **no verified public score found**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- The technical report states evaluations span "STEM, agentic coding, knowledge, instruction following, long context, safety, health, and tool calling," but only the STEM/coding/tool numbers above are published with values — the safety, health and long-context results are not.

Human preference:

- **Surge blind side-by-side, 1,276 tasks: independent raters preferred MAI-Thinking-1 over Claude Sonnet 4.6** for overall quality across single- and multi-turn tasks — but **trailed Claude Opus 4.6**. This is the only independent, non-benchmark evidence in the report and it is genuinely mixed.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool calling is a first-class post-training target inside an 8M+-environment RL programme, and **Terminal-Bench 2.0 at 46.0%** is a credible mid-tier agentic-terminal result where Microsoft concedes Anthropic leads. Held to 70 by the near-total absence of published agentic benchmarks: no Tau3, no GDPval-AA, no OSWorld, no AutomationBench, no Claw-Eval, no MCP-Atlas, and Terminal-Bench 3.0/4.0 unpublished.
- **Reasoning: 84/100.** **AIME 2025 at 97.0%** and **AIME 2026 at 94.5%** are elite competition-mathematics results, and **GPQA Diamond at 84.2%** is solidly mid-frontier. Not higher because there is no published HLE, LCR, CritPt or Omniscience figure, the model's *reasoning* composite on llm-stats is a modest 33.7 (#87), and AIME strength in a reasoning model is narrower evidence than a broad reasoning suite.
- **Context window: 80/100.** **256K tokens**, verified in both the technical report and the Foundry catalog. Not higher because **no long-context retrieval benchmark — MRCR, RULER, LongBench or AA-LCR — has ever been published for this model**, so the "600 page document" capability is a design intent rather than a measured result, and 256K is not the top tier.
- **Multimodal: 15/100.** **Text-only**, confirmed by the Foundry catalog (`Input type: text`, `Output type: text`) and by llmreference's explicit advice against vision/document workloads. Floor score by methodology. Pre-training did include PDF-derived *text* content, which is not the same as PDF input support.
- **Coding: 78/100.** **SWE-bench Pro 52.8%**, **SWE-bench Verified 73.5%** and **LiveCodeBench v6 87.7%** are a genuinely competitive coding profile for the active-parameter class, and Microsoft's own harness shows it beating Claude Haiku 4.5 across four SWE/Terminal benchmarks. Held below the frontier by its **#35 of 46** SWE-bench Pro rank, **#47 of 81** SWE-bench Verified rank, **Terminal-Bench 2.0 at 46.0%**, and the absence of SciCode, DeepSWE and any Terminal-Bench 3.0/4.0 data.
- **Cost efficiency: 82/100.** **The least-evidenced score in this report.** Microsoft repeatedly claims "mid-weight price," "best price-to-performance ratio in its weight class," and "cost-efficient reasoning," and the 35B-active architecture genuinely caps inference cost far below the ~1T headline suggests — but **no numeric tariff could be verified from any source**, and the model is Preview-only on a single Foundry route with no Free tier. Scored at 82 on the strength of the architectural and positioning evidence alone; if the real tariff turns out near the ~$1.25/$4.25 reference point this score is right, and if it is materially higher or lower it would move correspondingly.
- **Overall Score: 65/100.** Best fit: **regulated enterprise deployments on Microsoft Foundry where data provenance is a hard requirement** — Microsoft's no-distillation, no-AI-generated-pretraining-data, in-house-processed 30T-token corpus and fully in-house 8K-GB200 training pipeline are a genuine and rare auditability story, and AIME 2025 at 97.0% with SWE-bench Pro at 52.8% is a strong combination. The 1,276-task Surge result — beating Sonnet 4.6 but trailing Opus 4.6 — is the honest read: genuinely good, not frontier. Verify the current tariff before committing, since it is unpublished.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research centered on the **official 109-page technical report** *"MAI-Thinking-1: Building a Hill-Climbing Machine"* (`microsoft.ai/pdf/mai-thinking-1.pdf` — full architecture, 30T-token pre-training corpus description, MAI-Base-1 on 8K GB200s, STEM and agentic RL-climb curves, and the benchmark table), cross-checked against Microsoft's launch blog of 2026-06-02 and its 2026-08-12 public-preview update, the **Microsoft Foundry / Azure AI model catalog** entry (lifecycle Preview, version 2026-06-01, quick facts: text-in/text-out, 256k context, 64k output, 8M+ RLE, adaptive reasoning, length-compressed CoT, post-training RL scope), the Microsoft AI model index page, llmreference's model record (single-provider route, independent SWE-bench Pro #35/46 and SWE-bench Verified #47/81 rankings, the 1,276-task Surge comparison), Latent Space's AINews coverage of the Build launch (the 1T@35B reading and the 8,192-GB200 training detail), benchlm.ai's model page, and independent critical coverage of Microsoft's benchmark framing. Every benchmark value is labeled Microsoft-reported, and the **absence of a verifiable price is stated explicitly rather than estimated**. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_1_Flash.md`, using the same headings — re-scoring MAI-Thinking-1 is warranted the moment Foundry publishes a numeric tariff, and is overdue for Terminal-Bench 3.0/4.0, Tau3, GDPval-AA and any long-context retrieval number.