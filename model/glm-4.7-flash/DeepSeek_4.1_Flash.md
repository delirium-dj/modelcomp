# GLM 4.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Z.ai/GLM-4.7-Flash (`zai-org/GLM-4.7-Flash`, 30B-A3B)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Z.ai's 30B-A3B sparse MoE flash model, MIT-licensed and optimized for agentic coding, long-horizon planning and tool use at high throughput; the strongest 30B-class open model of its release window.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.7-Flash`), Ollama, and 65+ hosted providers (free lanes exist). No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** 2026-01-19 per LLM24 (some listings date the launch to 2026-02-24); knowledge cutoff not disclosed.
- **IDs:** `zai-org/GLM-4.7-Flash`; MIT.
- **Context window:** 200K per BenchLM; the folder's curated metadata lists 1M — this conflict is unresolved in public sources. Vendors/catalogues generally list 200K.
- **Modalities:** text in/out; reasoning; tool calling.
- **Pricing (as of 2026-10-23):** free-to-cheap: free hosted lanes and $0.00/$0.00 entries; MIT weights self-host free.
- **Architecture:** sparse MoE, 31B total / 3B active ("30B-A3B"); MIT.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **79.5%**; BrowseComp: **42.8%** (Hugging Face card, as reported by RITS/NYU and TokenMix)
- Claw-Eval / MCP-Atlas / OSWorld / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA: **75.2%**; AIME 25: **91.6%**; HLE: **14.4%** (huggingface.co/zai-org/GLM-4.7-Flash)
- Artificial Analysis Intelligence Index: **no verified public score found** for this exact id

Coding:

- SWE-bench Verified: **59.2%**; LiveCodeBench v6: **64.0%** (Hugging Face card; BenchLM)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER/AA-LCR figure published; window listed as 200K (BenchLM) vs 1M (folder metadata).

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench 79.5% is excellent for 3B active and BrowseComp 42.8% shows real web-agent work, but no OSWorld/Claw-Eval data exists (Hugging Face card).
- **Reasoning: 78/100.** AIME 25 91.6% and GPQA 75.2% are strong for the class; HLE 14.4% caps it (Hugging Face card).
- **Context window: 75/100.** 200K (or 1M per metadata) is mid-to-upper tier, but no retrieval benchmark exists and the sources conflict.
- **Multimodal: 15/100.** Text-only model (template floor for text-only input).
- **Coding: 65/100.** SWE-bench Verified 59.2% and LiveCodeBench v6 64.0% are very strong at 3B active, well above Qwen3-30B-A3B's 22.0 (Hugging Face card; BenchLM).
- **Cost efficiency: 95/100.** MIT weights, free hosted lanes and ~$0.07/$0.40 FlashX pricing keep it near the floor.
- **Overall Score: 60/100.** Mean of the five quality dims (66+78+75+15+65)/5 = 59.8 → 60. Best-fit: self-hosted coding agents and tool loops where a 3B-active budget is mandatory.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card, BenchLM, RITS/NYU review, TokenMix, Ollama model page, Z.ai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
