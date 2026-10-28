# GPT-5.4 Pro — findings by GLM 4.5 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-compute tier of the GPT-5.4 family (released March 5, 2026) designed for maximum performance on the most complex tasks. It features enhanced reasoning capabilities compared to the base GPT-5.4 model, with standout performance in research-level physics and mathematics. Available exclusively through the OpenAI Responses API and ChatGPT Pro/Enterprise plans.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API only); OpenCode Zen `opencode/gpt-5.4-pro` (paid, $30/$180); ChatGPT Pro/Enterprise plans. Note: No Batch API support, unlike its successor GPT-5.5 Pro.
- **Release / knowledge:** Released 2026-03-05 with the GPT-5.4 family; knowledge cutoff: August 31, 2025 (same as GPT-5.2, the oldest in the OpenAI range).
- **IDs:** `opencode/gpt-5.4-pro` (Zen, paid); `gpt-5.4-pro` (OpenAI API); dated default snapshot `gpt-5.4-pro-2026-03-05` for reproducibility.
- **Context window:** 1,050,000 tokens with 128,000 max output. OpenAI documents no separate maximum-input cap for this model.
- **Modalities:** Input: text and image only; output: text only. No audio or video in either direction. Reasoning: yes, with reasoning-token support and three effort levels (medium, high, xhigh - no none, low or max). Tool calls: yes, including computer use.
- **Pricing (as of 2026-10-28):** $30 / 1M input, $180 / 1M output (no cached-input discount). Additional penalties: prompts over 272K input tokens reprice the entire session at 2x input and 1.5x output; regional processing endpoints carry a 10% uplift; no Batch API support.
- **Rate limits:** Strictest in the dataset - Tier 1 is 50 RPM / 50,000 TPM, dropping to 20 RPM / 40,000 TPM for long-context requests (>272K input).
- **Architecture:** Proprietary, closed weights. Parameter count and topology not disclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: 89.3% (state of the art at announcement, OpenAI-reported)
- GDPval (wins or ties vs professionals): 82.0% (OpenAI-reported)
- FinanceAgent v1.1: 61.5% (OpenAI-reported)
- Investment Banking Modeling Tasks (internal): 83.6% (OpenAI-reported)
- MultiChallenge: 69.2% (#5, Scale AI SEAL via BenchLeader)
- TutorBench: 56.6% (#2, Scale AI SEAL)
- Terminal-Bench 2.0: no verified public score found for Pro
- VISTA (visual language understanding): 53.9% (#2 of 57, Scale AI SEAL via BenchLeader)

Reasoning / knowledge:

- GPQA Diamond: 94.6% (#6 of all configurations, independently corroborates OpenAI's reported 94.4%)
- HLE: 44.3% (#5 of 46, Scale AI / CAIS via Epoch AI Benchmarking Hub); 58.7% with tools (OpenAI official)
- ARC-AGI-1 (verified): 94.5% (#35); ARC-AGI-2 (verified): 83.3% (#34)
- SimpleBench: 74.1% (#10, SimpleBench via Epoch AI Benchmarking Hub)
- CritPt: 30.0% (#15, Artificial Analysis via BenchLeader) - highest research-level physics figure in dataset
- Chess Puzzles: 58.6% (#6, Epoch AI Benchmarking Hub)
- FrontierMath Tier 1–3: 82.5% (#13, Epoch v2 via BenchLeader); Tier 4: 58.5% (#21)
- MathArena Apex: 69.8% (#3, MathArena via BenchLeader)
- IPhO 2025 Theory: 93.5% (Meta Muse chart)
- SimpleQA Verified: 46.3% (#35, Epoch); MultiNRC: 62.3% (#4, Scale AI SEAL)
- Frontier Science Research: 36.7% (OpenAI-reported)
- Epoch Capabilities Index: 158.9 (#13, Epoch AI Benchmarking Hub)
- FORTRESS (safety/honesty): 14.8% (#54, Scale AI SEAL)

Coding:

- WeirdML: 57.4% (#53, no-reasoning config, Epoch AI Benchmarking Hub)
- SWE-Bench Pro (Public): no verified public score found for Pro (base model: 57.7%)
- Terminal-Bench 2.0: no verified public score found for Pro (base model: 75.1%)
- LiveCodeBench, SciCode: no verified public score found

Long context:

- No long-context retrieval reported for Pro (base model reports Graphwalks/MRCR v2 numbers)

Multimodal:

- VISTA: 53.9% (#2 of 57) - the only Pro-specific vision measurement found
- OSWorld-Verified: no verified public score found for Pro (base model: 75.0%)
- MMMU Pro: no verified public score found for Pro

## Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 89.3% (SOTA at announcement), GDPval 82.0%, FinanceAgent 61.5%, MultiChallenge 69.2% (#5) and TutorBench 56.6% (#2) evidence strong agentic work. However, models.dev lists Tool Call No for the Pro variant, conflicting with agentic claims. Missing Terminal-Bench/Tau2 numbers for Pro. Narrow API surface (no code_interpreter, hosted_shell, or skills).
- **Reasoning: 94/100.** GPQA Diamond 94.6% (#6), HLE 58.7% with tools (official), ARC-AGI-2 83.3% verified (#34), FrontierMath T1–3 82.5% (#13), MathArena Apex 69.8% (#3) and IPhO 2025 93.5% demonstrate clear frontier-band placement. CritPt 30.0% (#15) is the highest research-level physics figure in the dataset.
- **Context window: 95/100.** 1,050,000 tokens verified via models.dev (≥1M tier = 95–100). No Pro long-context retrieval measurement caps it below 100, but operational limitations (no cache discount, full-session repricing above 272K, 20 RPM long-context limit) make the long window effectively unusable for many applications.
- **Multimodal: 72/100.** Text + image in, text out, with measured VISTA 53.9% (#2 of 57). Above the +image-in 60–70 band top on measured vision evidence, but below omni-input models. No other multimodal benchmarks found.
- **Coding: 68/100.** WeirdML 57.4% (#53) is the only coding-adjacent measured number and it is mid-pack. SWE-Bench Pro and Terminal-Bench 2.0 are unreported for Pro, with base model showing 57.7% and 75.1% respectively. Lacks code interpreter and hosted shell tools.
- **Cost efficiency: 12/100.** $30/$180 per 1M tokens (blended $67.50/M) - far beyond the $10/$50 = ~30 methodology reference. Most expensive price point in its family with no Batch API support and no cached-input discount. Viable only when maximum quality justifies cost.
- **Overall Score: 82/100.** Mean of the five quality dimensions (80 + 94 + 95 + 72 + 68) / 5 = 409/5 = 81.8 → 82. Best suited for maximum-quality knowledge work, deep research, and hard reasoning where budget is secondary. Not recommended for routine coding, cost-sensitive workloads, or applications requiring long context or multimodal capabilities.

## Analysis and comparisons

### Strengths
1. **Exceptional reasoning capabilities**: Top-tier performance in GPQA Diamond (94.6%, #6), CritPt (30.0%, #15 - highest in dataset), and FrontierMath (82.5% T1–3, #13).
2. **Strong research performance**: Excels at research-level physics (CritPt) and mathematics (FrontierMath, MathArena Apex).
3. **Large context window**: 1.05M tokens with no input sub-cap, though operational limitations reduce practical utility.
4. **Vision-based computer use**: Unique capability among Pro models for vision-grounded agent tasks.

### Weaknesses
1. **Prohibitive cost**: $30/$180 pricing with no discounts, making it the most expensive option in its family.
2. **Limited API surface**: Responses API only with no Batch support, lacking code interpreter, hosted shell, and skills tools.
3. **Operational constraints**: Strict rate limits (50 RPM / 50K TPM at Tier 1), no cached-input discount, and session repricing above 272K tokens.
4. **Superseded by GPT-5.5 Pro**: Same price but faster (33 minutes vs 20 minutes for complex tasks), better features (Batch API support), and newer knowledge cutoff.
5. **No multimodal benchmarks**: Despite image input capability, no quantified multimodal performance metrics available.

### Positioning in the market
GPT-5.4 Pro represents OpenAI's maximum-compute tier for the most complex tasks, but its commercial rationale is weakened by the existence of GPT-5.5 Pro at the same price point with better performance and features. It's positioned for:
- Graduate-level science and research work
- Complex mathematical problem solving
- Tasks requiring maximum reasoning quality where cost is secondary
- Applications needing vision-based computer use

Not recommended for:
- Cost-sensitive applications
- Coding tasks (better alternatives available)
- Long-context workflows (operational limitations)
- Multimodal applications (limited benchmarks)
- General-purpose use (better value in other models)

## Signature

- Provided by: **GLM 4.5 Flash (z-ai/glm-4.5-flash)** — 2026-10-28
- Method: Synthesis of existing research findings from GLM 5.3 Flash and Claude Opus 5, with additional analysis and normalization. Scores are normalized 1-100 interpretations, not official vendor scores.
- Note: This model has been superseded by GPT-5.5 Pro, which offers better performance and features at the same price point.