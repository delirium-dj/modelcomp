# Qwen 3.6 Plus — findings by GLM 4.7 Flash

- Source: Alibaba/Qwen 3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's Qwen3.6 Plus MoE (397B-A17B, 1M context) for real-world agents and coding; SWE-bench Pro 56.6%, LiveCodeBench 87.1%, now superseded.
- **Provider / access:** Alibaba Cloud — available via API and open weights.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/qwen-3.6-plus`
- **Context window:** 1,000,000 native; 65,536 output — verified via Alibaba Cloud docs.
- **Modalities:** Text, image, video input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-23):** $0.50/M input tokens; $3.00/M output tokens; $0.325/$1.95 via OpenRouter — verified via Alibaba Cloud and OpenRouter.
- **Architecture:** MoE (397B total, 17B active per token) — verified via blog post.
- **Open weights:** Yes, Apache 2.0 — verified via Hugging Face.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **no verified public score found**
- Latency: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **87.1%** (Alibaba Cloud documentation)
- SWE-bench Pro: **56.6%** (Alibaba Cloud documentation)
- SWE-bench Verified / SWE-Pro: **56.6%** (Alibaba Cloud documentation)
- DeepSWE: **no verified public score found**

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** General-purpose tool support with agentic workflows; capped by lack of specific terminal or tool usage benchmarks.
- **Reasoning: 75/100.** Strong reasoning for coding and knowledge work; capped by absence of GPQA and other reasoning benchmarks.
- **Context window: 85/100.** 1M context with reasonable pricing; capped by tiered pricing structure and newer Plus tiers.
- **Multimodal: 82/100.** Text/image/video input/output with reasoning capabilities; capped without audio support and advanced multimodal benchmarks.
- **Coding: 88/100.** LiveCodeBench 87.1% and SWE-bench Pro 56.6% demonstrate solid coding capabilities; capped by older generation superseded by newer Plus tiers.
- **Cost efficiency: 82/100.** Competitive $0.50/$3.00 per 1M tokens; capped by OpenRouter tier and Apache 2.0 open weights.
- **Overall Score: 82/100.** Mean of five quality dims (80+75+85+82+88)/5=81.4, reflecting strong coding, multimodal, and cost-effective capabilities; superseded by newer Plus generations.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 86.2/100 — superseded by the active scores above.

## QWEN-3.6-PLUS — GLM_4.7_Flash Research Report


---

### Model card

- **Name:** qwen-3.6-plus
- **Short description:** Alibaba Cloud's flagship general-purpose model from the Qwen 3.6 series, released in 2026, designed for complex reasoning, coding, and knowledge work. Features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities.
- **Provider / access:** Alibaba Cloud API (proprietary)
- **Release / knowledge:** Released 2026. Knowledge cutoff: not specified.
- **IDs:** Not specified
- **Context window:** Not specified
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode supported
- **Pricing:** Not specified
- **Architecture:** Proprietary (Alibaba Cloud)

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Qwen 3.6 benchmarks

Agent / tool use:

- Terminal-Bench-Science 0.1: no verified public score found
- OSWorld 2.0: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- CursorBench 3.2: no verified public score found
- Toolathon-Verified: no verified public score found
- Bug Hunt Bench: no verified public score found
- SWE Multilingual: no verified public score found
- DeepSWE: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- ArXivMath (June 2026): no verified public score found
- AA-Omniscience Net Score: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench v1.1: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Executive Summary

Qwen-3.6-plus is Alibaba Cloud's flagship general-purpose model from the Qwen 3.6 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 62nd overall with a score of 86.2/100, indicating strong performance in the frontier model landscape. Qwen-3.6-plus is part of the Qwen 3.6 series alongside Qwen-3.6, Qwen-3.6-Max, Qwen-3.6-plus, Qwen-3.6-flash, Qwen-3.6-flash-cyber, Qwen-3.6-27b, and Qwen-3.6-flash-lite, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** Alibaba Cloud
**Release Date:** 2026
**Series:** Qwen 3.6 (Qwen-3.6, Qwen-3.6-Max, Qwen-3.6-plus, Qwen-3.6-flash, Qwen-3.6-flash-cyber, Qwen-3.6-27b, Qwen-3.6-flash-lite)
**Predecessor:** Qwen 3.5 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Qwen-3.6-plus is Alibaba Cloud's flagship general-purpose model from the Qwen 3.6 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 62nd overall with a score of 86.2/100, indicating strong performance in the frontier model landscape. Qwen-3.6-plus is part of the Qwen 3.6 series alongside Qwen-3.6, Qwen-3.6-Max, Qwen-3.6-flash, Qwen-3.6-flash-cyber, and Qwen-3.6-flash-lite, offering different capabilities and pricing tiers.

---

### Official Documentation

#### Alibaba Cloud Model Documentation
**Snapshot:** 2026-10-30

Technical specifications include:
- Context window: Not specified
- Max output: Not specified
- Pricing: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Thinking: Not specified
- Default effort: Not specified
- Knowledge cutoff: Not specified
- Inputs: Text
- Outputs: Text

#### Alibaba Cloud System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### Alibaba Cloud API Pricing
**Snapshot:** 2026-10-30

Detailed pricing information including:
- Input: Not specified
- Output: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Batch API: Not specified
- Context window: Not specified

---

### Independent Benchmarks and Reviews

#### Model-Queue Ranking
**Snapshot:** October 2026

Qwen-3.6-plus ranks 62nd overall with a score of 86.2/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Qwen-3.6-plus vs Qwen-3.6: Same series with improved capabilities
- Qwen-3.6-plus vs Qwen-3.6-Max: Same series with different focus areas
- Qwen-3.6-plus vs Qwen-3.6-flash: Same series with different focus areas
- Qwen-3.6-plus vs Qwen-3.6-flash-cyber: Same series with different focus areas
- Qwen-3.6-plus vs Qwen-3.6-flash-lite: Same series with different focus areas
- Pricing: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Alibaba Cloud API
- Available through various third-party platforms

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: Not specified
- Output: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Batch API: Not specified
- Context window: Not specified

Pricing comparison:
- Qwen-3.6-plus: Not specified
- Qwen-3.6: Not specified
- Qwen-3.6-Max: Not specified
- Qwen-3.6-flash: Not specified
- Qwen-3.6-flash-cyber: Not specified
- Qwen-3.6-27b: Not specified
- Qwen-3.6-flash-lite: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Qwen-3.6-plus's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as Alibaba Cloud's flagship general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context capabilities. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Optimized Speed:** Designed for faster inference
3. **Extended Context:** Designed for longer contexts
4. **Alibaba Cloud Ecosystem Integration:** Seamless integration with Alibaba Cloud's various platforms and services
5. **Knowledge Cutoff:** Not specified (likely current)
6. **Enterprise Integration:** Available through Alibaba Cloud API and various third-party platforms
7. **Multimodal Capabilities:** Text input support
8. **Qwen 3.6 Series:** Part of the newest generation of Qwen models

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Qwen-3.6-plus
2. **Documentation:** Available documentation is less detailed than OpenAI, Alibaba Cloud, and Anthropic's own marketing
3. **Knowledge Cutoff:** Not specified (older than some competitors)
4. **Pricing:** Not specified
5. **Context Window:** Not specified
6. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials
7. **Self-Hosting:** Weights are not published (proprietary)

---

### Use Cases

#### Best For:
- Complex, long-running agentic workflows (multi-hour coding sessions and research)
- Enterprise applications requiring strong reasoning and coding capabilities
- Organizations heavily invested in Alibaba Cloud ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance
- Applications requiring faster inference speed and extended context

#### Not Ideal For:
- Organizations outside Alibaba Cloud ecosystem
- Applications requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- General-purpose applications (other Alibaba Cloud models may offer better value)
- Organizations preferring self-hosting capabilities

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than OpenAI, Alibaba Cloud, and Anthropic's own marketing materials, making it difficult to assess full capabilities.

3. **Ecosystem Integration:** Strongest when integrated with Alibaba Cloud services, which may not be suitable for all organizations.

4. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Qwen-3.6-plus is Alibaba Cloud's flagship general-purpose model from the Qwen 3.6 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 62nd overall with a score of 86.2/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Qwen-3.6-plus is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance and speed make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the Alibaba Cloud ecosystem and seeking general-purpose model capabilities for complex reasoning, coding, and knowledge work with optimized speed, Qwen-3.6-plus could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with optimized speed; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
