# Gemini 3.5 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** First model of the Gemini 3.5 family (Google I/O 2026, released 2026-05-19) — built on the Gemini 3 Flash reasoning foundation, pitched as "frontier intelligence at Flash speed": the strongest agentic/coding Flash yet, beating Gemini 3.1 Pro on TB2.1, MCP-Atlas, FinanceAgent and GDPval-AA, top-right of the AA Intelligence vs Speed Pareto frontier (Index 55 at launch, 280 tok/s). GA-stable since Sep 2026; default thinking effort changed high→medium. Default model in the Gemini app and AI Mode in Search.
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI (non-global $1.65/$9.90), Google Antigravity, Android Studio, Gemini Enterprise; free tier available; OpenRouter/second-party routes ($2.70/$16.20 premium tier rows on BenchLeader).
- **Release / knowledge:** released 2026-05-19; knowledge cutoff **January 2026** per launch coverage (the developer FAQ still lists Jan 2025 — flagged as likely stale).
- **IDs:** `google/gemini-3.5-flash` (gateway routes) / `gemini-3.5-flash` (native, internal `3.5-flash-05-2026`; preview was `gemini-3-flash-preview`).
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, images, video, audio, PDF in; text out; reasoning yes (dynamic thinking on by default; effort minimal/low/medium/high — low improved for code/agent tasks); tool calls yes (function calling, structured outputs, code execution, file search, search grounding, URL context, **Computer Use Preview**); no image/audio generation.
- **Pricing (as of 2026-10-07):** **$1.50 in / $9.00 out** per 1M, cached input **$0.15** (90% discount); Batch/Flex/Priority options. AA measured run cost $1,552 for its full index (5.5× Gemini 3 Flash) due to heavier agentic token usage. Free tier. Paid.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Google-run unless noted):

- MCP-Atlas: **83.6** (vs Opus 4.7 79.1, GPT-5.5 75.3 — clear lead). OSWorld-Verified: **78.4** (near GPT-5.5 78.7). Finance Agent v2: **57.9** (#1 in Google's table). Terminal-Bench 2.1: **76.2** (vs GPT-5.5 78.2, 3.1 Pro 70.3 — second).
- GDPval-AA: **1656** Elo (3.1 Pro 1314 — big jump; still under the 1750+ frontier ref, between Sonnet 4.6's 1676 and 3.1 Pro's 1314).
- Toolathlon: 56.5 (vs GPT-5.5 55.6 — middling absolute). AutomationBench-AA: **42.6** (AA independent, guardrail-aware).
- Tau3 / Claw-Eval / ExploitBench: no verified public score found.

Reasoning / knowledge (Google-run unless noted):

- HLE (full set text+MM): **40.2** (just clears the 40%+ ref; 3.1 Pro 44.4, Opus 4.7 46.9 above). No GPQA Diamond row published.
- ARC-AGI-2: **72.1** (vs GPT-5.5 84.6 — mid-high). LiveBench 2026-06-25: **74.6** (benchmark-owner run).
- AA Intelligence Index: **55** at launch (up 9 from Gemini 3 Flash; BenchLeader's own index rates medium effort 63.1, #68 of 758 — its scale differs). Both readings are under the 60+ ref.

Coding (Google-run unless noted):

- Terminal-Bench 2.1: **76.2** (below the 88% ref). SWE-bench Pro (Public): **55.1** (vs 3.1 Pro 54.2, Opus 4.7 64.3).
- DeepSWE 1.1: **37.0 ±2** (DataCurve/AA harness, medium effort — far under the 74% frontier ref; long-horizon weakness at default effort).
- BenchLeader category coding: 57 (their index, lowest category for this model). SWE-bench Verified / Codeforces / AA Coding Index: no verified public score found.

Long context:

- MRCR v2 (8-needle): **77.3% at 128K**, **26.6% at 1M pointwise** (Google; 3.1 Pro 84.9/26.3) — retrieval is real at 128K but falls off hard at 1M.
- AA-LCR (medium): **74.3** (#150); MLCR: 18.3. Window capacity 1M, retrieval well short of the ≥98% condition.

Multimodal (Google-run unless noted):

- CharXiv Reasoning: **84.2** (#1 in Google's table, edges GPT-5.5 84.1). MMMU-Pro: **83.6** (no tools; beats 3.1 Pro 80.5, GPT-5.5 81.2). Blueprint-Bench 2: 33.6. LMArena Documents: 1461 (#25).

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP-Atlas 83.6 and OSWorld 78.4/FinanceAgent 57.9 are board-topping rows, but GDPval 1656 misses the 1750 ref, TB2.1 76.2 and Toolathlon 56.5 are mid, and AA AutomationBench 42.6 is mid-pack.
- **Reasoning: 85/100.** HLE 40.2 barely clears the 40% ref, ARC-AGI-2 72.1 and LiveBench 74.6 are strong; no GPQA row and AA Index 55 (both scales under 60+) hold it at 85.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor; MRCR 77.3/26.6 and AA-LCR 74.3 show the retrieval story is the weak face of the model → floor.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in (upper band, 75–90); CharXiv 84.2 #1 and MMMU-Pro 83.6 lead the table, Blueprint mid; text-only output and no audio/image generation keep it under 90.
- **Coding: 78/100.** TB2.1 76.2 and SWE-Pro 55.1 beat or match 3.1 Pro but trail the frontier refs (88/…); DeepSWE 37.0 at default effort is a clear long-horizon deficit; no SWE-Verified row.
- **Cost efficiency: 78/100.** $1.50/$9.00 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (≈75), lifted to 78 by the 90%-off cache, free tier, and batch/flex options — offset by AA's finding that real agentic runs cost 5.5× a Gemini 3 Flash run.
- **Overall Score: 86/100.** (84+85+95+88+78)/5 = 86.0 → 86 — the speed-intelligence Pareto pick: frontier-class agentic/multimodal scores at Flash latency and sub-Pro pricing, with deep 1M retrieval and default-effort long-horizon coding as the honest drags.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (DeepMind model card, Google blog, AI for Developers, Artificial Analysis, BenchLeader, LLM Stats, Writingmate); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
