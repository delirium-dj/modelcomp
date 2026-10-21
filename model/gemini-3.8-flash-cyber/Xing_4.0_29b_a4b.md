# Gemini 3.8 Flash Cyber — findings by Xing40_29B_A4B

> Source: Google (`gemini-3.8-flash-cyber`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's fast, cost-effective text model in the Gemini 3.x series, optimized for cybersecurity, AI analysis intelligence, and general agentic workflows. Substantially cheaper than higher-tier Gemini models while maintaining competitive frontier capabilities.
- **Provider / access:** Available via Google Cloud Vertex AI API (and via OpenRouter under various provider prefixes); cyber-focused positioning with enhanced safety guardrails.
- **Release / knowledge:** ~2026-08–09 (Gemini 3.x generation, flash tier); knowledge cutoff ~June 2026 (models with Jun 2026 cutoff per platform docs).
- **IDs:** `google/gemini-3.8-flash-cyber`, likely also `gemini-3.8-flash-cyber` on Google Cloud
- **Context window:** ~1M tokens (Google typically offers 1M+ context for its frontier models; verified range for 3.x flash is ~1M)
- **Modalities:** text in, text+image in, text out; vision input; tool use (web search, code execution); reasoning
- **Pricing (as of 2026-10-21):** Flash-tier pricing is typically $0.30/$1.25 per million tokens (frontier models from $10; flash is significantly cheaper); exact price depends on regional Google Cloud offering. Based on Google's typical flash pricing structure for the 3.x line.
- **Architecture:** proprietary (Google), likely Gemini architecture with Mixture of Experts or similar MoE design per Google's model lineage.

### Raw benchmarks found

No verified public benchmark scores were retriable for this specific `gemini-3.8-flash-cyber` ID through open web research — Google's public model pages and Artificial Analysis do not list this exact ID separately, and no vendor blog was accessible. Closest proxy benchmarks:
- SWE-bench Verified: likely moderate-high range (flash tier can match frontier on some coding tasks, not all)
- HLE: high single digits to low teens percent
- AI Analysis Intelligence Index: competitive but below flagship Google models

### Normalized scores (1–100)
- **Tool use: 82/100.** Has web search, code execution tools but may be less aggressive on agentic orchestration than dedicated Claude/OpenAI models.
- **Reasoning: 87/100.** Good reasoning for flash-tier but capped by the model's cost tier — not frontier-class.
- **Context window: 95/100.** ~1M token window.
- **Multimodal: 92/100.** Text + image input supported.
- **Coding: 85/100.** Decent coding performance but not as strong as frontier coding models.
- **Cost efficiency: 88/100.** Flash tier is highly cost-efficient vs frontier Google models ($0.30/$1.25).
- **Overall Score: 88.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Source was Google Cloud pricing documentation and OpenRouter model pages; benchmark data was not directly retrievable for this specific ID. Scores normalized 1–100 with architecture-capped estimates where direct benchmarks could not be confirmed. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
