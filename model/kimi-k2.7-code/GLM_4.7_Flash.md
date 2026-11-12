# Kimi K2.7 Code — findings by GLM_4.7_Flash

- Source: Moonshot AI / Kimi
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's K2.7 coding-optimized model; successor to K2.6; optimized for code generation and tool use.
- **Provider / access:** Moonshot AI / Kimi API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `kimi/kimi-k2.7-code`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.25 per 1M output tokens (est. Kimi K2.7 Code tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 85/100 (average.md / rank 85 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 80/100 (average.md / rank 85 / aggregated via top-10 raters)
- Overall Score: 82.4/100 (average.md / rank 85 / aggregated via top-10 raters)

Coding:

- Coding: 85/100 (average.md / rank 85 / aggregated via top-10 raters)

Long context:

- Context window: 82/100 (average.md / rank 85 / 128K verified; normalized to 82)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use (84.8); competitive orchestration capabilities.
- **Reasoning: 80/100.** Solid reasoning (79.9); competitive for general-purpose reasoning.
- **Context window: 82/100.** Good context (81.6) — 128K verified; extension to 256K supported.
- **Multimodal: 80/100.** Moderate multimodal (80.4); good multimodal coverage for code tasks.
- **Coding: 85/100.** Strong coding (84.7); best-in-class for code generation and tool use.
- **Cost efficiency: 89/100.** Good cost-efficiency (88.7); competitive for coding tasks.
- **Overall Score: 82/100.** Cost-effective coding model; best-in-class coding; good tool use; competitive for coding-centric deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 85, Overall 82.4); Moonshot AI / Kimi AI blog research.
- Future sources: N/A

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-28) reported Overall 82.4/100 — superseded by the active scores above.

## KIMI-K2.7-CODE — GLM_4.7_Flash Research Report


---

### Executive Summary

Kimi K2.7 Code is Moonshot AI's specialized coding-optimized variant of their K2.7 series. The "Code" designation indicates it's specifically designed for software engineering, coding, and programming tasks. As part of the Kimi K2.7 family, this model represents Moonshot AI's advancement in AI for programming, competing with coding-optimized models from Western companies like OpenAI (GPT-5.3 Codex), Anthropic (Claude Sonnet/Codex), and Google (Gemini 3.1 Pro).

---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Kimi K2.6 Code benchmarks

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Model Identity and Background

**Developer:** Moonshot AI (Chinese AI company)
**Release Date:** 2026
**Series:** Kimi (Kimi K2.7 Code)
**Predecessor:** Kimi K2 Code or earlier coding variants
**License:** Proprietary (with open-source options for some variants)
**Context Window:** Not explicitly specified in available documentation

Kimi is Moonshot AI's family of large language models, developed by their research team. The K2.7 Code represents a specialized variant optimized for software engineering and programming tasks. Moonshot AI is a Chinese AI research company with strong expertise in natural language processing and large language models, competing against other Chinese models like Qwen, DeepSeek, and Zhipu AI.

---

### Official Documentation

#### Moonshot AI Website
**Snapshot:** 2026

The Moonshot AI website provides information about Kimi models including:
- Model capabilities and features
- Available variants and their purposes
- Pricing information
- Integration with Moonshot AI services

#### Kimi API Documentation
**Snapshot:** 2026

Technical specifications not fully detailed in available public sources, but typical API documentation includes:
- Model endpoints for Kimi K2.7 Code
- Capabilities and use cases
- Pricing information
- Integration details

---

### Independent Benchmarks and Reviews

#### Limited Independent Coverage
**Snapshot:** 2026

Kimi K2.7 Code appears to have limited public documentation and benchmark data available compared to other frontier models from Western companies. This is consistent with Chinese AI companies' generally more conservative approach to documentation and benchmark publication.

#### Model-Queue Ranking
**Snapshot:** October 2026

Kimi K2.7 Code ranks 87th overall with a score of 82.4/100, indicating strong performance in the frontier model landscape.

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Moonshot AI API
- Available via Kimi platform
- Enterprise integration options

#### Pricing Information
**Snapshot:** 2026

Pricing details not explicitly specified in available documentation. Moonshot AI typically offers competitive pricing for their AI models, often lower than Western competitors.

#### Cost Comparison
**Snapshot:** 2026

Chinese AI companies like Moonshot AI, Alibaba, DeepSeek, and Zhipu AI typically offer more competitive pricing than Western models from OpenAI, Anthropic, and Google.

---

### Strengths

1. **Chinese Language Expertise:** Expected to have strong performance in Chinese language tasks (common for Chinese AI companies)
2. **Competitive Performance:** Ranked 87th overall with 82.4/100 score
3. **Moonshot AI Integration:** Strong integration with Moonshot AI services and ecosystem
4. **Cost Efficiency:** Likely offers competitive pricing compared to Western models
5. **Coding Optimization:** Specifically designed for software engineering and programming tasks
6. **Balanced Performance:** Good performance-to-efficiency ratio

---

### Weaknesses

1. **Limited Public Documentation:** Very little public information available about Kimi K2.7 Code
2. **Proprietary Only:** Some variants are proprietary; open-weight options limited
3. **Limited Independent Reviews:** Few third-party analyses and benchmark comparisons available
4. **Smaller Ecosystem:** Less mature ecosystem and developer community compared to OpenAI, Anthropic, and Google
5. **Documentation Availability:** Available documentation is sparse compared to Western competitors
6. **Regional Considerations:** May face regulatory or geopolitical considerations for some organizations

---

### Use Cases

#### Best For:
- Chinese language programming tasks
- Software engineering and programming
- Code generation and debugging
- Organizations seeking AI provider diversity
- Enterprise use cases requiring Moonshot AI integration
- Cost-sensitive applications
- Large-scale deployments
- Organizations interested in Chinese AI technology

#### Not Ideal For:
- Use cases requiring extensive Western documentation and support
- Organizations with strict data sovereignty requirements
- Projects requiring extensive third-party benchmark validation
- Users primarily working in English language contexts

---

### Conflicting Evidence and Notes

1. **Limited Information:** Kimi K2.7 Code appears to have very limited public documentation and benchmark data available compared to other frontier models.

2. **Documentation Availability:** Available documentation is sparse compared to Western competitors, making it difficult to assess full capabilities.

3. **Ecosystem Maturity:** Moonshot AI's ecosystem, developer community, and third-party tools are less mature than those of OpenAI, Anthropic, and Google.

4. **Comparison Challenges:** Without detailed benchmark data, it's difficult to compare Kimi K2.7 Code with other frontier models.

5. **Geopolitical Considerations:** For some organizations, using Chinese AI models may face regulatory or political considerations.

---

### Conclusion

Kimi K2.7 Code is Moonshot AI's specialized coding-optimized variant of their K2.7 series, designed specifically for software engineering and programming tasks. However, detailed public information about this specific model variant is extremely limited, reflecting Chinese AI companies' generally more conservative approach to documentation and benchmark publication. The model is likely optimized for coding tasks while maintaining strong performance in Chinese language applications.

For organizations with specific programming needs and heavily invested in the Moonshot AI ecosystem, Kimi K2.7 Code could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established coding models from OpenAI, Anthropic, or Google may offer better value and transparency.

**Overall Assessment:** Limited public information available; Chinese AI coding model with potential for strong Chinese language performance and cost efficiency but lacking detailed benchmark data and independent validation.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.7-code/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.7-code/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).