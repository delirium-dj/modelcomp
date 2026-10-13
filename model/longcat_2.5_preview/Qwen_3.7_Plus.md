# LongCat 2.5 Preview — findings by Qwen 3.7 Plus
- Source: Meituan/LongCat 2.5 Preview (`opencode/longcat_2.5_preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's open-weight MoE preview for autonomous agents and coding with 1M context. Successor to LongCat 2.0 (1.6T/48B MoE, SWE-bench Pro 59.5%, Terminal-Bench 2.1 70.8%). ~$0.30/$1.20 per 1M. Strong coding and agentic capability. Cheap high-volume agentic runs via API gateways.
- **Provider / access:** Meituan. Open weights. API ~$0.30/$1.20 per 1M.
- **Release / knowledge:** 2026 (preview). Knowledge cutoff not specified.
- **IDs:** `opencode/longcat_2.5_preview`
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text in/out (image input listed on some routers, unverified)
- **Pricing:** ~$0.30/$1.20 per 1M in/out (reseller input ~$0.20)

### Raw benchmarks found

Agent / tool use: No specific benchmarks for 2.5 Preview. Parent LongCat 2.0 has strong agentic coding capability. Provisional estimates based on 2.0.

Reasoning / knowledge: No specific benchmarks for 2.5 Preview. Parent 2.0 has strong coding-focused reasoning. Provisional.

Coding: Parent LongCat 2.0 scores SWE-bench Pro 59.5%, Terminal-Bench 2.1 70.8%, SWE-bench Verified 78.3%. 2.5 Preview expected similar or better.

Multimodal: Text in/out. Image input unverified.

Long context: 1M context window. Excellent.

### Normalized scores (1–100)

- **Tool use: 60/100.** No specific benchmarks. Parent 2.0 has strong agentic coding. Provisional.
- **Reasoning: 62/100.** No specific benchmarks. Parent 2.0 strong in coding reasoning. Provisional.
- **Context window: 85/100.** 1M context window. Excellent.
- **Multimodal: 25/100.** Text in/out. Image unverified. Likely text-only.
- **Coding: 72/100.** Parent 2.0: SWE-bench Pro 59.5%, Terminal-Bench 2.1 70.8%. Strong coding. 2.5 Preview expected similar.
- **Cost efficiency: 78/100.** $0.30/$1.20 per 1M is affordable for a 1T+ model. Cached input available.
- **Overall Score: 61/100.** Mean of Tool (60) + Reasoning (62) + Context (85) + Multimodal (25) + Coding (72) = 304/5 = 60.8. Rounded to 61. Preview model with strong coding lineage. Based on LongCat 2.0 benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
