# Muse Glimmer 30B — findings by Mimo v2.6 Flash

- Source: Meta/Muse Glimmer-30B (`meta-models/Muse-Glimmer-30B`)
- Date: 2026-10-09 (UTC; original research 2026-09-25, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache 2.0 30B dense multimodal model (2026-08-10) distilled from Muse Spark and aimed at always-on local agent workflows — function calling, local coding, LLM-as-a-judge. Not a variant of Muse Spark 1.1/1.2/1.3 (those are closed/API); Glimmer is the open-weights sibling.
- **Provider / access:** self-host from Hugging Face `meta-models/Muse-Glimmer-30B` (BF16 ≈60 GB, GGUF Q4 ≈17 GB); hosted on OpenRouter `meta/muse-glimmer-30b`, Fireworks, Together, Vercel AI Gateway, NVIDIA NIM ($0), Kilo, NanoGPT, Eden AI. OpenAI-compatible Chat Completions; tool calls and structured output supported (Models.dev provider table).
- **Release / knowledge:** 2026-08-10 (Meta research blog / Hugging Face; OpenRouter lists 2026-08-09 — one-day listing-vs-blog difference); knowledge cutoff **2026-04** (Awesome Agents technical dump).
- **IDs:** `meta/muse-glimmer-30b` (OpenRouter/Models.dev), `meta-models/Muse-Glimmer-30B` (HF). **No Zen Free ID found** (`noFreeId: true`).
- **Context window:** 131,072 tokens (128K default per Meta developer docs, "longer contexts supported"); output up to 131,072 on most hosts (117,964 on OpenRouter/NanoGPT, 20,480 on Requesty). Beam128K score below is the 128K-window evidence.
- **Modalities:** text + image in (dedicated perception encoder); text out; controllable reasoning effort (low/high); tool calls; structured output; multilingual (100+ languages). No video/audio/PDF input per Meta docs — provisional flag (2026-10-09): the HF ATEM chat template contains a `<|video|>` placeholder branch, so the template accepts video parts, but no video benchmark or Meta documentation supports the capability; not credited.
- **Pricing (as of 2026-09-25):** open weights = self-host free; OpenRouter $0.30 in / $1.10 out per 1M; Fireworks / Together / Vercel $0.35 / $1.50; Kilo/NanoGPT $0.30 / $1.10; EmpirioLabs $0.20 / $0.80; NVIDIA NIM $0.00. No metered Zen Free tier found.
- **Architecture:** dense 30B (≈29.6B including vision encoder), 64 layers (Awesome Agents dump), vocab 202,048, ~4-bit quantized build shipped at launch (55+ GB full precision → <20 GB Q4), DFlash 16-token block speculative decoding (3.1× decode on RTX 5090); **Apache 2.0** (no scale-based restrictions).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Rows are Meta's own high-reasoning runs unless marked (AA) = Artificial Analysis, or (leaderboard) = public board.

Agent / tool use:

- MCP Atlas (Public): **75.5** (Meta; vs Gemma4-31B 54.2, Qwen3.6-27B 62.5)
- Tau3-Banking: **23.5%** (Meta)
- GDPval-AA v2: **953** (Meta; Gemma4-31B 811, Qwen3.6-27B 1141)
- Claw-Eval / ClawProBench: no verified public score found; closest related public run **WildClawBench 47.6** (Meta)
- Toolathon / MCP-Atlas covered above / SWE Atlas Codebase QnA: Toolathon and SWE Atlas Codebase QnA **no verified public score found**
- DeepSearch QA: **74.6**; Gaia2: 43.3; SkillsBench (with skills): 44.3; OSWorld-Verified: **65.9** (all Meta)
- Terminal-Bench 2.1 (Terminus 2): **51.7%** (Meta; confirmed by AA via OpenRouter) — Qwen3.6-27B scored 60.7 on the same table. **Terminal-Bench 4.0: 0.5%** (AA via OpenRouter, 2026-10-09 — near-zero on the newest harness)
- GDPval-AA v2: **953** Elo (Meta) = **14.5%** in AA's percent format (AA via OpenRouter, 2026-10-09; same eval, different metric presentation)
- SciCode: **43.6%** (Meta) / **44.9%** (AA via OpenRouter — independent run, slightly higher)
- HF leaderboard ranks (card eval-results, re-checked 2026-10-09): SWE-bench Verified 76 = **#19 of <32B class**; SWE-bench Pro 51.2 = #27 (<32B); TB2.1 51.7 = #25 (<32B); AIME 94.7 = #13 (<128B); MMMU-Pro 74 = #3 (<128B); GPQA 83.5 = #51
- Siren AgentDojo: attack success 28.4 (↓) / utility 94.2 (Meta)

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (AA run, cited in Meta's table)
- HLE (text, no tools): **22.0%** (AA)
- LCR / MLCR: **AA-LCR 83.3%** (Artificial Analysis via OpenRouter benchmark block, 2026-10-09 — supersedes the earlier 80.0 reading)
- CritPt: **2.6%** (AA via OpenRouter, 2026-10-09 — fills the first-pass gap; far below frontier)
- Artificial Analysis indexes (High effort, via OpenRouter, 2026-10-09): Intelligence Index **17.5**, Coding Index **49.0**, Agentic Index **8.5** — fills all three first-pass gaps; BenchLM overall still no verified public score found
- AIME 2026: **94.7**; IFBench: 77.0; CharXiv Reasoning: 78.8; MMMU-Pro: 74 (Meta)
- Omniscience Accuracy / Hallucination Rate: **27.0% / non-hallucination 18.1%** (AA via OpenRouter, 2026-10-09 — i.e. ~82% hallucination rate on this probe; fills the first-pass gap); related honesty probes — Siren AgentDojo attack success 28.4%, CI Memories violation 26.4% / coverage 64.8%

Coding:

- SWE-bench Verified: **76.0%** (Meta; also 76 on the SWE-bench public leaderboard)
- SWE-bench Pro: **51.2%** (Meta; also 51.2 on the ScaleAI SWE-bench Pro leaderboard)
- LiveCodeBench: no verified public score found
- SciCode: **43.6%** (Meta)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 131,072-token window; **Beam128K: 65.1** (Meta, 128K needle-style retrieval probe); AA-LCR 80.0. MRCR / RULER / GraphWalks: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 65/100.** Every available tool number sits in the methodology's mid band (TB2.1 51.7, Tau3 23.5, GDPval 953 Elo / 14.5%), with MCP Atlas 75.5 and DeepSearch QA 74.6 as the bright spots — and the new independent rows push down: **TB4.0 0.5%** and **AA Agentic Index 8.5** (both 2026-10-09) show the stack does not carry to the newest agentic harnesses; trimmed 66→65.
- **Reasoning: 74/100.** Above the mid band on the classic axes: GPQA 83.5, HLE 22, AA-LCR 83.3 (upgraded from 80.0), AIME 94.7. New independent context (2026-10-09) caps it lower: AA Intelligence Index **17.5** (roughly the open-weights class median), CritPt **2.6%**, and Omniscience non-hallucination **18.1%** (~82% hallucination rate) — trimmed 75→74.
- **Context window: 58/100.** 131,072 tokens falls in the 100K–200K tier (50–64) and sits mid-tier there; Beam128K 65.1 shows real 128K-window retrieval but no ≥512K evidence exists, and Meta explicitly notes longer contexts are only "supported", not measured.
- **Multimodal: 65/100.** Text + image in / text out lands in the +image band (60–70), with strong document/vision numbers (OmniDocBench 75.8, ScreenSpot Pro 75.4, MMMU-Pro 74, CharXiv 78.8). Not higher: no video or PDF input, no audio, text-only output.
- **Coding: 70/100.** SWE-bench Verified 76.0 (with a public leaderboard row) and SWE-bench Pro 51.2 clear the mid band, SciCode 43.6 sits just above the mid-band threshold. Capped well below frontier by TB2.1 51.7 (ref 85+), SciCode 43.6 (ref 55+) and no LiveCodeBench, DeepSWE or Coding Index number at all.
- **Cost efficiency: 96/100.** Apache 2.0 weights mean free self-hosting (17 GB Q4 GGUF on one consumer GPU), and hosted routes run $0.20–$0.35 in / $0.80–$1.50 out with a $0 NVIDIA NIM endpoint — between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (92) anchors, near the top.
- **Overall Score: 66/100.** (65 + 74 + 58 + 65 + 70) / 5 = 66.4 → 66 (was 67 on 2026-09-25 — trimmed on the new independent AA rows, not a product change) — best-fit as the free-to-self-host local agent for scoped tool-calling, search and SWE-bench-class coding on one GPU; step up when a task needs long terminal/desktop sessions (TB2.1/TB4.0, OSWorld) or frontier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-25; user-approved second pass)
- Method: fresh public internet research (Meta research blog and ai.developer.meta.com docs, Hugging Face card, AI/TLDR and Awesome Agents benchmark tables, minirouter/TensorFeed/AI Release Tracker summaries, Models.dev provider pricing, SWE-bench and SWE-bench Pro leaderboards); second pass 2026-10-09 re-checked the [HF card](https://huggingface.co/meta-models/Muse-Glimmer-30B) (eval-results ranks, ATEM template) and the [OpenRouter model page](https://openrouter.ai/models/meta/muse-glimmer-30b) which carries the full AA benchmark block (Index 17.5 / Coding 49.0 / Agentic 8.5 / CritPt 2.6 / Omniscience / TB4.0) — AA and Grokipedia have no direct page for this model; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gaps closed (all via AA-through-OpenRouter):** Intelligence Index **17.5**, Coding Index **49.0**, Agentic Index **8.5**, CritPt **2.6%**, Omniscience **27.0% acc / 18.1% non-hallucination**, Terminal-Bench 4.0 **0.5%**; AA-LCR updated 80.0 → **83.3**; SciCode 43.6 (Meta) vs **44.9** (AA).
- **New context:** HF leaderboard ranks — SWE-V 76 is **#19 in the <32B class**, MMMU-Pro 74 is **#3 in <128B**, AIME 94.7 #13; release-date one-day difference (OpenRouter 08-09 vs Meta blog 08-10); provisional `<|video|>` template branch (uncredited).
- **Scores:** Tool 66→65, Reasoning 75→74 (driven by TB4.0 0.5, Agentic Index 8.5, CritPt 2.6, Omniscience 18.1); Context (58), Multimodal (65), Coding (70), Cost (96) unchanged; **Overall 67→66**.
