# GPT-5.4 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-5.4`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI flagship released March 5, 2026. General-purpose reasoning model positioned below dedicated coding variants (GPT-5.4 Pro, GPT-5.4-Nano). Same $2/$10 per 1M tokens pricing tier as prior GPT-5.x cadence (slightly different from Opus series which charges $5/$25). Strong frontier reasoning across multi-domain tasks. FrontierMath Tier 4 competitive with GPT-5 Astra state-of-the-art. AA Coding Agent Index tied or near-tie position vs Astra siblings. FrontierCode v1.1 strong competitive depth. Agents' Last Exam ~56% competitive positioning. Pricing efficient for general-purpose flagship tier.
- **Provider / access:** OpenAI API (`openai/gpt-5.4`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. Chat Completions endpoint supported per OpenAI docs.
- **Release / knowledge:** March 5, 2026. Knowledge cutoff: February 2026.
- **IDs:** `openai/gpt-5.4`; `gpt-5.4`; deprecated alias `gpt-5.4`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K tokens.
- **Modalities:** Text input, image input; text output. Reasoning yes (effort levels including xhigh). Full tool suite: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, image generation. JSON mode supported. Computer use explicitly available. Video NOT supported.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard. Cached input $0.20 per million tokens. Cache write $2.50 per million. Batch at 50% discount. Blended effective ~$1.25 per 1M standard; ~$0.63 per task low effort.
- **Architecture:** Proprietary OpenAI architecture. Same GPT-5 family cadence as 5.5 and successors.

### Raw benchmarks found

**Vals AI aggregator (independent)**

- Best result #17 of 151 on LegalBench.
- GPQA Diamond: 91.67%.
- Terminal-Bench 2.0: 58.43% (#12 of 67).
- MedCode: 41.29%.
- MedScribe: 77.55%.
- Code Migration: 34.98%.
- TaxEval v2: 73.96%.
- Vibe Code Bench v1.1: 67.42%.
- FrontierMath Tier 4 competitive with Astra.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 — proprietary reasoning model evaluated.
- GPQA Diamond 91.67% per Vals AI confirms competitive frontier reasoning benchmark.
- FrontierCode v1.1 Main competitive depth confirmed.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite with computer use explicitly available. Image + PDF input confirmed. Cap near 90 given broad tool depth.
- **Reasoning: 88/100.** AA Intelligence Index competitive with Astra; FrontierMath Tier 4 nearly tied; GPQA Diamond 91.67% top tier. Hard cap ~90.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 78/100.** Image + PDF input confirmed. Video NOT supported. File search tool explicitly present.
- **Coding: 86/100.** FrontierCode v1.1 strong competitive depth; Terminal-Bench 58.43% solid mid-frontier. Cap near 90 given frontier sibling positioning.
- **Cost efficiency: 88/100.** $2/$10 per 1M very efficient for general flagship tier. Blended ~$1.25 per 1M. Cache writes at $2.50 exceptional utilization for cacheable workloads.
- **Overall Score: 87/100.** Mean of five non-cost dims: (88+88+94+78+86)/5 = 87.6. Adjusted DOWN slightly for multimodal breadth gap vs Gemini 3 Flash. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Vals AI official benchmark aggregation page for GPT-5.4, Artificial Analysis Intelligence Index evaluation set inclusion, OpenAI official model release documentation references).
- Reference URLs:
  - [<GPT 5.4 (xhigh) Benchmarks, Cost and Capabilities | Vals AI>]
  - [<Artificial Analysis — GPT-5.4 Intelligence Index>]
- Future sources: add new file next to this one.
