# Grok 4 Fast — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok 4 Fast (`xai/grok-4-fast`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (shipped as `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`; free on grok.com, paid on the API). **Re-verification 2026-09-27: xAI deprecated this model on 2026-05-15 and retired the API on 2026-08-15** (mid-2026 vendor-page records), so the entry is now a historical reference and no longer callable on new xAI work.
- **Short description:** xAI's 2025-09-19 cost-efficiency play: one unified model whose reasoning and non-reasoning modes are steered by system prompt rather than separate weights, with a 2M-token window and heavy tool-use RL for web/X search. It matched Grok 4-level scores using ~40% fewer thinking tokens.
- **Provider / access:** xAI API (OpenAI-compatible), grok.com/iOS/Android (free users included at launch), OpenRouter and Vercel AI Gateway. Proprietary/closed weights.
- **Release / knowledge:** Released 2025-09-19. Reasoning behaviour is a prompt/`reasoning_effort` control, not a separate checkpoint.
- **IDs:** `grok-4-fast-reasoning`, `grok-4-fast-non-reasoning` (xAI API), `grok-4-fast-search` (arena codename `menlo`). No OpenCode Zen Free ID found.
- **Context window:** 2,000,000 tokens on both variants (xAI launch post); pricing steps up above 128K tokens, which is the practical cost cliff even though the window is 2M. Re-check 2026-09-27: the served **max output is 16,000 tokens** (xAI playground cap, per the mid-2026 vendor-page record), so the 2M window is for ingestion, not for proportionally long generation.
- **Modalities:** text and image in, text out; reasoning/non-reasoning modes, native tool calling, server-side web and X search, code execution. No audio or video.
- **Pricing (as of 2026-09-27):** $0.20 / 1M input and $0.50 / 1M output under 128K context; $0.40 / $1.00 at ≥128K; cached input $0.05 / 1M.
- **Architecture:** rebuilt Grok 4 class model with large-scale RL for "intelligence density" — ~98% lower cost than Grok 4 to reach the same frontier scores; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic search (xAI-reported, pass@1): BrowseComp **44.9%**, BrowseComp-zh **51.2%**, SimpleQA **95.0%**, Reka Research Eval **66.0%**, X Bench Deepsearch-zh **74.0%**, X Browse **58.0%**; LMArena Search Arena **#1 with 1163 Elo** at launch
- MCP-Universe **27.3%** (7/27), MCPMark **24.0%** (23/41), Tau2-Bench Telecom **65.8%**, Terminal-Bench 2.0 **29.2%**, Terminal-Bench Hard **18.9%**, GDPval-AA **1014 Elo**, AgentDrive **67.5%**, PolitNuggets **0.8%**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **85.7%** (xAI) / **85.4%** and **84.7%** in two BenchmarkList rows; AIME 2025 **92.0%** (xAI) / **89.7%**; HMMT 2025 **93.3%**; HLE **20.0%** (xAI) / **19.1%**
- MMLU-Pro **85.0%**; ARC-AGI-2 **5.3%**; MMMU Pro **72.8%**; CAIS Text Capabilities Index **13.3**
- Artificial Analysis Intelligence Index **27.9** (71st pct); **independent re-check 2026-09-27 measured 35** for the reasoning variant (227 tokens/s output speed, ranked #9 of 42) versus Grok 4's 33, so my first-pass 27.9 understated it; Artificial Analysis price-to-intelligence: SOTA at launch (98% cheaper than Grok 4 for equal benchmark performance)
- Omniscience accuracy / hallucination rate: **no verified public score found**

Coding:

- LiveCodeBench (Jan–May) **80.0%** (xAI) / **79.0%**; SciCode **44.2%** (66/458); VibeCodingBench **88.8** (3/15)
- SWE-bench Verified **45.4%** (68/72) and Vibe Code Bench v1.1 **0.0%** (70/71) are the hard ceilings; IOI **11.5%**; WebDev Arena **1162.07** (104/105)

Long context:

- The 2M-token window is vendor-documented but unbenchmarked: no MRCR/RULER/GraphWalks value exists for Grok 4 Fast, and the ≥128K price step plus the **16K served output cap** make the headline window costly and ingest-biased in practice.

### Normalized scores (1–100)

- **Tool use: 72/100.** Best-in-class agentic *search* (BrowseComp 44.9%, SimpleQA 95.0%, LMArena Search #1) and native tool calling, but generic MCP/terminal agentics are weak (MCP-Universe 27.3%, Terminal-Bench 2.0 29.2%).
- **Reasoning: 82/100.** 85.7% GPQA Diamond with 93.3% HMMT and an AA Intelligence Index that an independent re-check puts at **35** (my first pass recorded 27.9) is genuinely frontier-adjacent for the price; the cap is HLE at ~20% and ARC-AGI-2 at 5.3%.
- **Context window: 98/100.** A documented 2M-token window is the largest in this scan and unlocks whole-repository style prompts; it loses only because the ≥128K price tier doubles input cost, the served **max output is just 16K** (so the window is ingest-only) and no retrieval benchmark validates recall at length.
- **Multimodal: 62/100.** Text plus image input with MMMU-Pro **72.8%** (36th pct) is functional but unremarkable, and there is no audio, video or image generation.
- **Coding: 68/100.** 80.0% LiveCodeBench and 88.8 VibeCodingBench prove strong generation, but 45.4% SWE-bench Verified and a 0.0% Vibe Code Bench v1.1 run show it loses on real-repository agentic fixes.
- **Cost efficiency: 94/100.** $0.20/$0.50 with $0.05 cached input is among the cheapest frontier-adjacent pricing found; only the ≥128K escalation and paid-only API keep it from 100.
- **Overall Score: 76.4/100.** (72 + 82 + 98 + 62 + 68) / 5 = 76.4. Best fit: high-volume search-heavy and long-document workloads where cost per token dominates quality edges.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (xAI Grok 4 Fast launch post, BenchmarkList profile with third-party eval rows). **Re-verified 2026-09-27** against xAI's own docs hub (now showing only Grok 4.7 — 4 Fast has left the served lineup) and a mid-2026 vendor-page record confirming deprecation 2026-05-15, retirement 2026-08-15, 16K max output and AA index 35; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
