# GPT-5.1-Codex-Max — findings by Nemotron 3.5 Super VL 120B A12B

- Source: developers.openai.com/api/docs/models/gpt-5.1-codex-max (official OpenAI API docs), openai.com/index/gpt-5-1-codex-max (official launch blog), platform.openai.com/docs/models/gpt-5.1-codex-max (official), epoch.ai/models/gpt-5-1-codex-max (Epoch AI model page), benchgecko.ai/model/gpt-5-1-codex-max (benchmarks), benchlm.ai/models/gpt-5-1-codex-max (aggregator), benchlm.ai comparisons (vs Claude Fable 5.1, Claude Opus 5, Claude Sonnet 5, system-one Qwen3-8B, o1, NExT-GPT 7B, Macaw), kilo.ai/models/openai-gpt-5-1-codex (covers Codex family), opencode.ai/data/openai/gpt-5-1-codex-max (usage/cost)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max (OpenAI)
- **Short description:** OpenAI's frontier agentic coding model, purpose-built for long-running, detailed software engineering work; first model natively trained to operate across multiple context windows via session compaction; can work independently for 24+ hours; Windows-environment capable; Responses API only; 400K context window, 128K max output; Sep 30, 2024 knowledge cutoff; proprietary; released November/December 2025 (benchgecko lists Dec 2025).
- **Provider / access:** OpenAI Codex (CLI, IDE extension, cloud, code review); API access coming soon at announcement; OpenAI API (Responses API); deprecated as of fetch date (per OpenAI docs "Deprecated").
- **Release / knowledge:** Released Nov 19, 2025 (Epoch AI) / Dec 2025 (benchgecko); knowledge cutoff Sep 30, 2024; replaced GPT-5.1-Codex as default in Codex surfaces.
- **IDs:** `gpt-5.1-codex-max` (OpenAI API).
- **Context window:** 400,000 tokens (official OpenAI docs; Epoch AI; benchgecko).
- **Modalities:** Text + image in, text out; reasoning yes (token support, compaction across sessions); tool calls yes (function calling, web search); structured outputs/JSON mode yes.
- **Pricing (as of 2026-10-16):** $1.25/M input, $10/M output (OpenAI docs; Epoch AI); opencode.ai/data lists $1.00/$8.00 (provider variance). BenchGecko $1.25/$10.
- **Architecture:** GPT-5.1 reasoning stack updated for agentic tasks; parameter count unknown (Epoch AI lists Unknown).

### Raw benchmarks found

Official OpenAI launch blog appendix (model evaluations), Epoch AI scorecard, BenchGecko, benchlm.ai, kilo.ai (Codex family), opencode.ai/data.

Agent / tool use:

- SWE-bench Verified (n=500): **77.9%** (GPT-5.1-Codex-Max xhigh) vs 73.7% (GPT-5.1-Codex high) — official OpenAI blog
- SWE-Lancer IC SWE: **79.9%** (Max) vs 66.3% (Codex high) — official
- Terminal-Bench 2.0: **58.1%** (Max) vs 52.8% (Codex high) — official, Harbor harness
- Epoch AI METR Time Horizons: **1044.8** (best score) vs Gemini 3 Pro 223.7 / Claude Sonnet 4.5 224.3 / Grok 4 110.1 — Epoch AI
- Epoch AI ALE-Bench: **2176.9** (best score)
- Epoch AI Terminal-Bench 2.0: **84.7%** (best score) vs Gemini 3 Pro 60.4% / Claude Sonnet 4.5 69.4% / Grok 4 27.2% — Epoch AI

Reasoning / knowledge:

- Not heavily reported as general knowledge; benchlm lists no public overall score (unranked, 13 rows)
- AA Intelligence Index 23.7%, AA-GPQA Diamond 86.0%, AA-HLE 25.7%, AA-LCR 69.3%, CritPt 5.7% (benchlm.ai model page)
- AA-Omniscience: index -6.5%, accuracy 39.9%, hallucination rate 77.2% (benchlm)

Coding:

- LiveCodeBench (Vals): **83.6%** (benchlm.ai model page)
- Vibe Code Bench: **22.17%** (benchlm.ai / Vals AI)
- BenchGecko: avg score 85.6, rank #13; coding 69.0 (#24 globally), reasoning 69.7 (#36), math 83.7 (#17), knowledge 72.0 (#15), language 71.3 (#74); LiveBench Coding 81.4
- HumanEval / SWE-bench Pro / Codeforces not isolated for Max in fetched sources

Multimodal & grounded:

- AA-MMMU-Pro: **72.5%** (benchlm.ai)
- Image input supported; no other standard vision benchmarks isolated.

Long context:

- Session compaction across multiple context windows (core feature); AA-LCR 69.3%; no public needle-recall curve; context 400K.

Instruction following:

- AA-IFBench: not isolated for Max (reported for Codex base 70.0%)

### Conflicting results noted

- **Release date:** Epoch AI Nov 19, 2025 vs benchgecko Dec 2025 — close, treated as late 2025.
- **Pricing:** OpenAI docs $1.25/$10 vs opencode.ai/data $1.00/$8.00 — provider variance; OpenAI docs used as primary.
- **Overall score:** benchlm.ai lists "Not computed (unranked)" for Max; BenchGecko 85.6 avg — different composites; BenchGecko used only as directional.
- **SWE-bench Verified:** official blog 77.9% (Max xhigh) — no conflicting third-party number found for Max specifically.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** SWE-bench Verified 77.9, SWE-Lancer IC SWE 79.9, Terminal-Bench 2.0 58.1, Epoch METR Time Horizons 1044.8 (best), Epoch Terminal-Bench 2.0 84.7 (best) — elite long-horizon agentic coding; capped by no public MCP-Atlas/BrowseComp/OSWorld scores.
- **Reasoning: 66/100.** Epoch ALE-Bench 2176.9 (best), AA-LCR 69.3, AA Intelligence Index 23.7 mid-pack; general knowledge breadth not Max's focus.
- **Context window: 85/100.** Session compaction across multiple 400K windows is the flagship feature; AA-LCR 69.3 moderate; no public full-window retrieval curve.
- **Multimodal: 60/100.** Image input supported; AA-MMMU-Pro 72.5 only isolated vision benchmark.
- **Coding: 80/100.** SWE-bench Verified 77.9, SWE-Lancer IC SWE 79.9, LiveCodeBench 83.6, BenchGecko coding 69.0/LiveBench Coding 81.4 — strong; capped by no HumanEval/Codeforces/SWE-bench Pro isolation.
- **Cost efficiency: 65/100.** $1.25/$10 per M mid-range for a specialist coding model; not counted toward Overall.
- **Overall Score: 73/100.** Half-up mean of (74 + 66 + 85 + 60 + 80) / 5 = 73.0 → 73. Best-fit recommendation: frontier long-horizon agentic coding model with session compaction; deprecated in favor of newer Codex variants — treat as historical/reference.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + launch blog + Epoch AI + BenchGecko + benchlm.ai + kilo.ai + opencode.ai/data); scores are normalized 1–100 interpretations, not official vendor scores. Model is deprecated per OpenAI docs.
- Future sources: add a new file next to this one, using the same headings.
