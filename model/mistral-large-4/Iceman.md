# Mistral Large 4 — findings by Iceman

- Source: Mistral AI/Mistral Large 4
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Mistral Large 4.0 / Le Chonk)
- **Short description:** Mistral Large 4 is Mistral AI’s open-weight frontier multimodal Mixture-of-Experts model for general reasoning, coding, agentic workflows, cybersecurity, and professional knowledge work.
- **Provider / access:** Mistral Studio/API and open weights (preview announced; weights planned for release per Mistral). Local metadata lists `opencode/mistral-large-4` and `noFreeId`.
- **Release / knowledge:** Public preview announced October 6, 2026 (Mistral news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `mistral-large-4`, `mistral-large-4-0` (API/docs naming varies).
- **Context window:** 1,000,000 tokens (Mistral docs).
- **Modalities:** Multimodal model with text/image understanding capabilities (Mistral news/docs describe native multimodal model and vision encoder); text output for chat/completion use. Local metadata states text in/out.
- **Pricing (as of 2026-11-10):** $0.70 / 1M input tokens, $0.07 / 1M cached input tokens, $2.10 / 1M output tokens (Mistral docs).
- **Architecture:** Granular Mixture-of-Experts architecture with ~52B active parameters, ~1.05T total parameters, and ~1.6B vision encoder (Mistral docs/news).

### Raw benchmarks found

> Verified figures below are from Mistral’s “Introducing Mistral Large 4” announcement and Mistral docs (vendor-reported), unless noted.

Agent / tool use:

- AutomationBench: **59.9%** (Mistral announcement; ahead of several compared open models in chart context)
- AA-Briefcase: **1,393 Elo** (long-horizon knowledge work)
- Harvey Legal Agent Benchmark: outperforms all open-source models in vendor comparison (exact numeric score not fully extracted)
- Vals.ai Finance Agent v2: exceeds GPT-6-Astra in vendor-reported comparison (exact numeric score not fully extracted)
- CyberGym-E2E: **82%** on a specific test (described as highest of any model in that comparison on page)
- Cybench: solves **93%** of challenges (one of highest reported for open-weight model per announcement)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** in reviewed sources
- HLE: **no verified public score found** in reviewed sources
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** in reviewed sources

Coding:

- DeepSWE v1.1: **61.7%** (Mistral announcement)
- SWE-Atlas-QnA: **59.4%**
- Terminal-Bench 4.0: **28.3%**
- Combined Coding Agent Index: **49.8%** (as stated)
- Blind human eval (Surge AI, coding quality 1–5): **3.74** (ranked 2nd of 5 in reported set)

Multimodal:

- Dense 200 (visual grounding, bbox): **42%** (vendor comparison notes surpassing GPT-6-Astra 41% on that benchmark)
- ChartQA Pro / GDP.pdf / other multimodal benchmarks referenced in charts; numeric values not fully extracted from page text.

Long context:

- 1M context window documented (Mistral docs); no standalone MRCR/RULER/GraphWalks numeric score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores reflect vendor-reported preview results.

- **Tool use: 87/100.** Strong vendor-reported agentic/professional workflow and cybersecurity capabilities (AutomationBench 59.9%, AA-Briefcase 1393 Elo, strong legal/finance/cyber claims, Cybench 93%) indicate high tool/agent utility; some canonical agent benchmark scores not fully extracted.
- **Reasoning: 84/100.** Broad frontier positioning and strong domain performance claims suggest good reasoning, but canonical public reasoning benchmark numbers (GPQA/HLE/AA Index) were not extracted from reviewed sources.
- **Context window: 95/100.** 1M context window is excellent for long documents, repositories, and agent workflows.
- **Multimodal: 88/100.** Native multimodal model with vision encoder and strong vendor-reported visual grounding/perception claims (e.g. Dense 200 42%) indicates high multimodal capability, though full benchmark numerics were not all extracted.
- **Coding: 85/100.** Verified vendor-reported coding results (DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Terminal-Bench 4.0 28.3%, Coding Agent Index 49.8%, strong human eval 3.74) show solid capability but mixed across terminal/coding benchmarks.
- **Cost efficiency: 90/100.** $0.70/$2.10 with $0.07 cached input is competitive for a 1T-parameter open-weight frontier-class multimodal model.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87, 84, 95, 88, 85) = 87.8 → 88. Best fit for open-weight multimodal agentic workflows, coding, cybersecurity/knowledge-work tasks, and European/self-hosted deployment contexts (preview).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Mistral announcement and docs; scores are normalized 1–100 interpretations from vendor-reported figures, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Large 4 (Mistral news)](https://mistral.ai/news/mistral-large-4)
  - [Mistral Large 4 model documentation (Mistral docs)](https://docs.mistral.ai/models/mistral-large-4-0)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
