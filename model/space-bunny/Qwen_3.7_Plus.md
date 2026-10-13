# Space Bunny — findings by Qwen 3.7 Plus
- Source: Anonymous/Space Bunny (`opencode/space-bunny-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny
- **Short description:** Anonymous stealth preview reasoning model (vendor undisclosed) for coding, agentic tasks, tool use, and multimodal input. One model under three marketplace labels — Space Bunny (canonical), Space Bunny Alpha (OpenRouter stealth), Space Bunny Free (free limited-time tier on OpenCode Zen). 1M context window (524K in / 524K out). Text, image, video in; text out. Community speculation links it to MiniMax M3.1. Reddit reports it is "considerably weaker on practical, real-world tasks than its benchmark results would suggest." Free during limited preview with zero-retention policy.
- **Provider / access:** Anonymous/Stealth (OpenRouter, OpenCode Zen). Vendor undisclosed.
- **Release / knowledge:** September 2026 (estimated). Knowledge cutoff not specified.
- **IDs:** `opencode/space-bunny-free`
- **Context window:** 1,000,000 tokens (1M); 524K in / 524K out
- **Modalities:** Text, image, video in; text out
- **Pricing:** Free on OpenCode Zen for limited time; zero-retention provider

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores independently verified. Community reports strong benchmark results but "considerably weaker on practical, real-world tasks."

Reasoning / knowledge: No standard reasoning benchmarks independently verified. Lost to GLM-5.3 on Newton's cradle physics test (5-scene). Community speculation links to MiniMax M3.1.

Coding: Strong coding benchmarks claimed per OpenRouter description ("strong coding capabilities"). No independently verified coding benchmark scores found.

Multimodal: Text, image, video input supported. No standard multimodal benchmarks published.

Long context: 1M native context window (524K in / 524K out).

### Normalized scores (1–100)

- **Tool use: 55/100.** Described as having tool use capabilities. No specific agentic benchmark scores independently verified. Community reports suggest gap between benchmarks and real-world performance.
- **Reasoning: 55/100.** No standard reasoning benchmarks independently verified. Lost to GLM-5.3 on physics reasoning test. Stealth model with limited independent evaluation.
- **Context window: 75/100.** 1M context is good. 524K in / 524K out split is balanced.
- **Multimodal: 50/100.** Text, image, video input is comprehensive. No standard multimodal benchmarks published.
- **Coding: 60/100.** "Strong coding capabilities" per OpenRouter description. No independently verified coding benchmark scores. Community reports suggest weaker real-world performance than benchmarks indicate.
- **Cost efficiency: 90/100.** Free during limited preview. Zero-retention policy. Excellent cost proposition if maintained.
- **Overall Score: 59/100.** Mean of Tool (55) + Reasoning (55) + Context (75) + Multimodal (50) + Coding (60) = 295/5 = 59.0. Anonymous vendor, limited independent verification, community reports of weaker real-world performance, and stealth status significantly limit confidence in the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
