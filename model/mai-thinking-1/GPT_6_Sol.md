# MAI-Thinking-1 — findings by GPT 6 Sol

- Source: Microsoft AI (`MAI-Thinking-1`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1.
- **Short description:** Microsoft's proprietary sparse-MoE reasoning model for enterprise text workflows and agentic coding. Do not conflate the post-trained product's evaluation rows with its base-model pretraining plots or MAI-Code-1-Flash ([Microsoft launch](https://microsoft.ai/news/introducing-mai-thinking-1/), [Foundry catalog](https://ai.azure.com/catalog/models/MAI-Thinking-1)).
- **Provider / access:** Public-preview Microsoft Foundry `MAI-Thinking-1`, catalog version **2026-06-01**, through Azure Chat Completions; also MAI Playground demo. No verified OpenCode Zen Free API ID or released weights ([Foundry listing](https://ai.azure.com/catalog/models/MAI-Thinking-1), [Microsoft announcement](https://microsoft.ai/news/introducing-mai-thinking-1/)).
- **Release / knowledge:** Announced **2026-06-02**, updated public-preview availability announcement **2026-08-12**; Foundry version label 2026-06-01 is not itself proof of a separately released model. Knowledge cutoff not published in these primary sources ([launch](https://microsoft.ai/news/introducing-mai-thinking), [preview update](https://microsoft.ai/news/introducing-mai-thinking-1/), [catalog](https://ai.azure.com/catalog/models/MAI-Thinking-1)).
- **IDs:** `MAI-Thinking-1` Foundry product / version `2026-06-01`; demo `mai-thinking-1-latest` is a mutable playground label, not a pinned evaluation checkpoint ([catalog](https://ai.azure.com/catalog/models/MAI-Thinking-1), [preview](https://microsoft.ai/news/introducing-mai-thinking-1/)).
- **Context window:** **256K** total, **64,000 output tokens** in Foundry catalog. Microsoft-reported GraphWalks BFS at 128K is a particular test, not proof of full-window accuracy ([Foundry listing](https://ai.azure.com/catalog/models/MAI-Thinking-1), [Microsoft report](https://microsoft.ai/pdf/mai-thinking-1.pdf)).
- **Modalities:** Text in/out, reasoning and function calls; Foundry explicitly says no image/audio/video input or output. Structured document workflows require external text extraction ([Foundry](https://ai.azure.com/catalog/models/MAI-Thinking-1)).
- **Pricing (as of 2026-11-02):** Microsoft Foundry blog says **starts at $2 input / $8 output per million tokens**; region/commitment, cached-input and preview pricing are not independently confirmed here. Playground access is not a $0 API price ([Microsoft Foundry announcement](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632)).
- **Architecture:** **~1T total / 35B active** sparse MoE; proprietary, no downloadable weights ([Microsoft](https://microsoft.ai/news/introducing-mai-thinking-1/), [Foundry](https://ai.azure.com/catalog/models/MAI-Thinking-1)).

### Raw benchmarks found

The numeric model scores below are **Microsoft-reported** in its [technical report](https://microsoft.ai/pdf/mai-thinking-1.pdf) or launch communications; [BenchLM's source table](https://benchlm.ai/models/mai-thinking-1) reindexes those claims rather than reproducing them independently. Three independent-evaluation searches did not find an exact-Foundry-version AA benchmark run. Do not treat a model-comparison mirror as a second laboratory.

- **Agent / tool use:** Vendor Terminal-Bench **2.0 46.0%**, not v2.1/v4 ([report](https://microsoft.ai/pdf/mai-thinking-1.pdf), [source-labeled index](https://benchlm.ai/models/mai-thinking-1)). Microsoft confirms function calling but no independently verified exact-model τ³/ClawEval number found ([Foundry](https://ai.azure.com/catalog/models/MAI-Thinking-1)).
- **Reasoning / knowledge:** Vendor GPQA Diamond **84.2%**, MMLU-Pro **85.0%**, AIME 2025 **97.0%**, AIME 2026 **94.5%**, HMMT Feb 2026 **84.9%**, IFBench **85.0%** ([report](https://microsoft.ai/pdf/mai-thinking-1.pdf), [Microsoft announcement](https://microsoft.ai/news/introducing-mai-thinking-1/)). A Microsoft/Surge blind preference study spanned **1,276** tasks but its published prose does not give an exact win-rate; sample size must not be mistaken for score ([announcement](https://microsoft.ai/news/introducing-mai-thinking-1/)).
- **Coding:** Vendor SWE-bench Pro **52.8%**, SWE-bench Verified **73.5%**, LiveCodeBench **v6 87.7%** ([technical report](https://microsoft.ai/pdf/mai-thinking-1.pdf), [source index](https://benchlm.ai/models/mai-thinking-1)). No independently reproduced exact-snapshot SWE figure found; SWE Pro and Verified are separate sets.
- **Long context:** Vendor GraphWalks BFS at **128K 90%** ([report](https://microsoft.ai/pdf/mai-thinking-1.pdf), [source index](https://benchlm.ai/models/mai-thinking-1)); no exact-model full-256K multi-document retrieval result established.

### Normalized scores (1–100)

- **Tool use: 68/100.** Function-calling support and vendor Terminal-Bench 2.0 46, with sparse independent agent checks.
- **Reasoning: 78/100.** Strong reported math and GPQA/IFBench; single-vendor benchmark provenance caps confidence.
- **Context window: 72/100.** 256K offered, 90% BFS at 128K, no measured far-end 256K retention.
- **Multimodal: 15/100.** Explicitly text-only.
- **Coding: 75/100.** SWE Pro/Verified and LiveCodeBench vendor numbers support coding, not independently replicated here.
- **Cost efficiency: 45/100.** $2/$8 Foundry starting rates and 35B active compute are costlier than many text-only peers.
- **Overall Score: 62/100.** Half-up mean (68 + 78 + 72 + 15 + 75) / 5 = 61.6; enterprise text reasoning/coding where Foundry controls matter and vendor evaluations can be validated internally.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful official release/Foundry, independent-evaluation-coverage and tariff searches; score provenance and report-versus-base distinction explicit. Scores are normalized interpretations.
- Reference URLs:
  - [Microsoft MAI-Thinking-1 launch and preview update](https://microsoft.ai/news/introducing-mai-thinking-1/)
  - [Microsoft technical report](https://microsoft.ai/pdf/mai-thinking-1.pdf)
  - [Microsoft Foundry catalog specification](https://ai.azure.com/catalog/models/MAI-Thinking-1)
  - [Microsoft Foundry pricing announcement](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632)
  - [BenchLM source-labeled benchmark inventory](https://benchlm.ai/models/mai-thinking-1)
- Future sources: add a new file next to this one using the same headings.
