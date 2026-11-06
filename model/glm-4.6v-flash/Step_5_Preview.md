# GLM-4.6V-Flash — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`zai-org/GLM-4.6V-Flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash. Zhipu AI's **open-weights lightweight vision-language model** — the small sibling of the 106B GLM-4.6V — with a 128K context window and **MIT licence**. **A negative finding governs this report: BenchLM carries no `glm-4.6v-flash` page in any spelling** (both hyphen and dot variants 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A ~9B local VL model whose entire measured record is one benchmark: **ExtractBench Mean 45.19 (Short 47.28, Medium 44.52)**, run on official HF eval results with vLLM at a 64K output budget. Everything else — coding, agentic, reasoning, knowledge — has no verified public figure. It is a free, MIT-licensed, single-GPU document-extraction model and nothing more is evidenced.
- **Provider / access:** Self-hostable, MIT weights at `huggingface.co/zai-org/GLM-4.6V-Flash`; models.dev records 7 providers at **$0.00/$0.00**. **Not on OpenRouter, not in the OpenCode Console/Zen catalog.** Recommended serving: vLLM or SGLang; quantization trees exist for llama.cpp, Ollama, LM Studio and Jan.
- **Release / knowledge:** released **2025-12-08** (models.dev, both release and updated dates). **Knowledge cutoff not disclosed.**
- **IDs:** `zai-org/GLM-4.6V-Flash` (Hugging Face); `zhipuai/glm-4.6v-flash` (models.dev).
- **Context window:** **128,000 tokens** (models.dev and the HF card, "128k tokens (in training)"); **max output 32,768**. The upstream extraction harness ran with a 64K output budget.
- **Modalities:** **image in, text out** — HF pipeline tag `image-text-to-text`, architecture `glm4v`, BF16, MIT. Reasoning model; tool calling and structured output supported per models.dev.
- **Pricing (as of 2026-11-06):** **$0.00/$0.00** across every provider models.dev lists, because the weights are open and self-hostable. Cost scored on self-hosting economics rather than a metered rate.
- **Architecture:** open weights, MIT, **~9B parameters. Conflicting size: the HF card calls it 9B while the HF sidebar's "Model size" says 10B params**; the sibling GLM-4.6V is 106B per card/README but 108B per its sidebar — the same discrepancy pattern, so the card's 9B is used and the sidebar's recorded.

### Raw benchmarks found

- **ExtractBench (official HF eval results, vLLM, 64K output budget): Mean 45.19, Short 47.28, Medium 44.52** — the only benchmark with verified numbers for this exact model.
- **No verified public score found** for GPQA, HLE, AA-LCR, MLCR, CritPt, AA Intelligence Index, SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, GDPval-AA, MMMU-Pro, CharXiv, ZeroBench or any AA-Omniscience figure.

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the mid band. models.dev records tool calling and structured output as supported, which is a real substrate signal, but **no agentic benchmark of any kind exists** — no Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Held above the floor on the capability claim.
- **Reasoning: 45/100.** Below the mid band. **No GPQA, HLE, AA-LCR, MLCR, CritPt or Intelligence Index figure exists.** The only measured signal is ExtractBench Mean 45.19, a document-extraction benchmark rather than a reasoning one, used as a weak proxy and the score pinned near it rather than extrapolated.
- **Context window: 62/100.** 128,000 total with 32,768 max output sits in the methodology's 100K–200K band (50–64). **No MRCR/RULER retrieval figure was published** to test durability at that depth, so mid-band rather than top of band.
- **Multimodal: 65/100.** Image in, text out — the methodology's 60–70 "+image in" band. Held mid-band on the ExtractBench figures, which are document/extraction-shaped and therefore partly corroborate visual document handling, and on the MIT single-GPU deployment claim. No MMMU-Pro, CharXiv or ZeroBench figure exists.
- **Coding: 40/100.** **No verified public score found for SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench or Terminal-Bench.** This is the weakest evidence position in the file: for a 9B local model with zero published coding benchmarks, no defensible score above the bottom band is available, so it is placed just above it and flagged provisional.
- **Cost efficiency: 100/100.** **$0.00/$0.00 on every provider models.dev lists, with MIT-licensed weights so true self-hosting at zero licence cost is possible.** The methodology's rule is "$0 = 100"; the only discount would be that self-hosting a 9B vision model still costs GPU time — a compute cost, not a price.
- **Overall Score: 51/100.** (45 + 45 + 62 + 65 + 40) / 5 = 51.4 → **51** → **51**. Recommendation: a **free, MIT-licensed, single-GPU-or-lower local document-extraction and basic image-Q&A model** where a 128K window and $0 price matter more than measured quality. Worst fit: any task where a published benchmark exists for a competitor — for this model almost none do. Prefer **GLM-5.3-Flash (58.37)** or the larger GLM-4.6V for anything requiring measured capability.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `glm-4.6v-flash` page in any spelling** (both hyphen and dotted variants return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-24), with the single benchmark (ExtractBench Mean 45.19 / Short 47.28 / Medium 44.52, official HF eval results, vLLM, 64K output budget) re-attributed to its source, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. Because one benchmark exists, four of five quality dimensions are explicitly placeholders anchored on spec facts and the repo's metadata. **A size conflict is recorded rather than resolved: the HF card calls the model 9B while the HF sidebar's "Model size" field says 10B params**, and the sibling GLM-4.6V shows the same 106B-vs-108B pattern, so the card's 9B figure is used and the sidebar's is recorded. The MIT licence and $0.00/$0.00 rate card are surfaced as the model's two genuine properties, with the self-hosting compute cost noted but not scored. Missing benchmarks (GPQA, HLE, AA-LCR, MLCR, CritPt, AA Intelligence Index, SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, GDPval-AA, MMMU-Pro, CharXiv, ZeroBench, AA-Omniscience) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-4.6V-Flash model card (ExtractBench eval results, 128K context, MIT licence)](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [models.dev — `zhipuai/glm-4.6v-flash` provider record (7 providers at $0.00/$0.00, tool calling, structured output)](https://models.dev/models/zhipuai-glm-4.6v-flash)
  - [Repo curated meta — `model/glm-4.6v-flash/meta.json`](/model/glm-4.6v-flash/meta.json)
  - See also: [`model/glm-5.3-flash/`](glm-5.3-flash.md) (58.37) — the Flash sibling this report recommends for measured capability, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
