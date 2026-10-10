# Claude Sonnet 5 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude-Sonnet-5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, released June 30, 2026. "The most agentic Sonnet yet" — closes the gap to Opus 4.8 and beats it on two benchmarks: Terminal-Bench 2.1 (80.4% vs. 74.6%) and GDPval-AA v2 (Elo 1618 vs. 1615). SWE-bench Pro 63.2% is strong (+5.1 over Sonnet 4.6). OSWorld 81.2% is within 2.2 pts of Opus 4.8. HLE w/ tools 57.4% nearly matches Opus 4.8 (57.9%). BrowseComp 84.7% is excellent for agentic search. AA Intelligence Index 38.2 is modest. Adaptive thinking with effort dial (low/medium/high/xhigh). At $3/$15 standard pricing, 40% cheaper than Opus 4.8 ($5/$25). Updated tokenizer increases tokens-per-input by 1.0-1.35x. No free tier.
- **Provider / access:** Anthropic API (`claude-sonnet-5`); Claude.ai; Amazon Bedrock; Google Vertex AI. No free tier. No Zen Free ID.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-sonnet-5` (OpenCode Zen); `claude-sonnet-5` (Anthropic API).
- **Context window:** 1,000,000 tokens (1M) total, 128K output.
- **Modalities:** Text, image, file in; text out.
- **Pricing (as of 2026-10-10):** $3.00/$15.00 per 1M in/out (standard). Introductory rate of $2/$10 expired August 31, 2026. 40% cheaper than Opus 4.8 ($5/$25) on per-token basis. Note: updated tokenizer means ~1.0-1.35x more tokens per character vs. Sonnet 4.6, so effective per-character cost is similar or slightly higher.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic; vs. Opus 4.8 74.6%, Sonnet 4.6 67.0% — BEATS Opus)
- Terminal-Bench 2.1 (Vals): **74.5%** (Vals AI)
- OSWorld-Verified: **81.2%** (Anthropic; vs. Opus 4.8 83.4%, Sonnet 4.6 78.5%)
- BrowseComp: **84.7%** (Anthropic — excellent agentic search)
- GDPval-AA: Elo **1603** (Anthropic) / **1618** (system card) / vs. Opus 4.8 1615 — BEATS Opus
- GDPval-AA normalized: **48.3%** (AA)
- HLE w/ tools: **57.4%** (Anthropic; vs. Opus 4.8 57.9%)
- AA Agentic Index: **44.3%** (AA)
- Terminal-Bench 3.0: **14.6%** (FrontierBench — latest version, low)
- ApprenticeBench: **16%** (NeoCognition — low)

Coding:

- SWE-bench Verified: **85.2%** (Anthropic)
- SWE-bench Pro: **63.2%** (Anthropic; vs. Opus 4.8 69.2%, Sonnet 4.6 58.1%)
- SWE Multilingual: **78.3%** (Anthropic)
- SWE Multimodal: **28.1%** (Anthropic)
- Terminal-Bench 2.1: **80.4%** (Anthropic)
- LiveCodeBench (Vals): **82.4%** (Vals AI)
- SWE-bench (Vals): **79.6%** (Vals AI)
- AA Coding Index: **71.5%** (AA)
- CursorBench 3.2: **61.5%** (Cursor; vs. Sonnet 4.6 49%, +12.5 pts)
- VulcanBench CII v1: **89.2%** (VulcanBench)
- FrontierCode 1.1 Main: **42.7%** (Cognition)
- AA-SciCode: **54.3%** (AA)
- CursorBench 4.0: **34.1%** (Cursor — latest version, low)

Multimodal:

- OSWorld-Verified: **81.2%** (Anthropic — computer use)
- CharXiv (with tools): **88.3%** (Anthropic)
- CharXiv (without tools): **77%** (Anthropic)
- AA-MMMU-Pro: **77.3%** (AA)
- Design Arena Website: **1281** (OpenRouter)

Reasoning / knowledge:

- HLE: **57.4%** w/ tools (Anthropic; vs. Opus 4.8 57.9%) / **43.2%** w/o tools
- HLE-Verified: **31.0%** (Google DeepMind)
- AA-LCR (Long Context Reasoning): **82.0%** (AA)
- LABBench2: **80.1%** (Google DeepMind)
- GPQA Diamond: **91.1%** (AA) / **88.9%** (Vals AI)
- MMLU-Pro: **87.5%** (Vals AI)
- AA Intelligence Index: **38.2** (AA — #5 model, 2-3 pts behind GPT-5.5 and Opus 4.8)
- AA-HLE: **41.3%** (AA)
- CritPt (Physics): **16.9%** (AA)
- AA-Omniscience Index: **16.5%** (AA — low)
- AA-Omniscience Accuracy: **40.1%** (AA)
- AA-Omniscience Hallucination Rate: **39.4%** (AA)

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 80.4% BEATS Opus 4.8 (74.6%) — a structural shift where the mid-tier Sonnet surpasses the flagship on terminal work. OSWorld 81.2% is within 2.2 pts of Opus 4.8. BrowseComp 84.7% is excellent for agentic search. GDPval-AA Elo 1618 BEATS Opus 4.8 (1615) on knowledge work. However, AA Agentic Index 44.3% is moderate. Terminal-Bench 3.0 14.6% is very low (latest version). ApprenticeBench 16% is low. The tool use profile is exceptional on the benchmarks where it matters (terminal, computer use, knowledge work) but weak on the latest terminal version and apprentice-level tasks.
- **Reasoning: 62/100.** HLE w/ tools 57.4% nearly matches Opus 4.8 (57.9%) — a 10.6 pt jump over Sonnet 4.6. AA-LCR 82.0% is solid. GPQA Diamond 91.1% is excellent. MMLU-Pro 87.5% is strong. LABBench2 80.1% is solid. AA Intelligence Index 38.2 is modest (#5 model, 2-3 pts behind GPT-5.5 and Opus 4.8). CritPt 16.9% is low. AA-Omniscience 16.5% is low. The reasoning profile is strong on HLE and knowledge benchmarks but modest on composite intelligence measures.
- **Context window: 85/100.** 1M tokens total with 128K output. AA-LCR 82.0% is solid for long-context reasoning. The 1M context window is standard for frontier models. 128K output is generous for complex document generation.
- **Multimodal: 80/100.** OSWorld 81.2% is excellent for computer use. CharXiv 88.3% (with tools) is strong. AA-MMMU-Pro 77.3% is solid. Image and file input supported. The multimodal capability is focused on practical computer use and document/chart understanding.
- **Coding: 70/100.** SWE-bench Verified 85.2% is strong. VulcanBench CII v1 89.2% is excellent. LiveCodeBench 82.4% is solid. SWE-bench Pro 63.2% is solid (+5.1 over Sonnet 4.6, 6 behind Opus 4.8). AA Coding Index 71.5% is solid. CursorBench 3.2 61.5% is moderate (+12.5 over Sonnet 4.6). However, CursorBench 4.0 34.1% is low (latest version). FrontierCode 42.7% is modest. SWE Multimodal 28.1% is low. The coding profile is strong on SWE-bench variants and VulcanBench but weaker on the latest Cursor and frontier coding benchmarks.
- **Cost efficiency: 72/100.** $3/$15 standard pricing (intro $2/$10 expired Aug 31, 2026). 40% cheaper than Opus 4.8 ($5/$25) on per-token basis. At low/medium effort, best value for agentic workloads. However, at xhigh effort, can cost more than Opus 4.8 for similar quality due to higher output token usage. Updated tokenizer increases tokens-per-input by 1.0-1.35x, making effective per-character cost similar or slightly higher than Sonnet 4.6 at standard rates. No free tier. The cost-performance sweet spot is at low/medium effort for most agentic workflows.
- **Overall Score: 74.2/100.** Mean of five quality dims: (74 + 62 + 85 + 80 + 70) / 5 = 74.2. Anthropic's most agentic Sonnet. Key strengths: Terminal-Bench 2.1 80.4% (BEATS Opus 4.8), GDPval-AA Elo 1618 (BEATS Opus 4.8), OSWorld 81.2% (near-Opus), BrowseComp 84.7% (excellent), HLE 57.4% (near-Opus), SWE-bench Pro 63.2% (strong), 1M context, 40% cheaper than Opus 4.8. Key weaknesses: AA Intelligence Index 38.2 (modest), CritPt 16.9% (low), AA-Omniscience 16.5% (low), Terminal-Bench 3.0 14.6% (very low), CursorBench 4.0 34.1% (low), no free tier, tokenizer increases effective cost. Best fit for: agentic workflows where Sonnet-class pricing with near-Opus capability is optimal, terminal/CLI work (beats Opus 4.8), knowledge work (beats Opus 4.8 on GDPval-AA), computer use (near-Opus), and teams wanting the best cost-performance ratio at low/medium effort. Not ideal for: cybersecurity tasks (explicitly not trained, 0% working exploits), xhigh-effort reasoning (can cost more than Opus for similar quality), or tasks requiring the latest terminal benchmarks (TB 3.0 14.6%).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcement, Vellum, BenchLM, Artificial Analysis, Vals AI, Cursor evals, VulcanBench, Cognition FrontierCode, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
