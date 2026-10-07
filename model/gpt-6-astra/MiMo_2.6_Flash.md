# GPT-6 Astra — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's first GPT-6-generation frontier flagship (released 2026-09-03), "the most capable model we have ever broadly deployed" — built to operate software (terminal, browser, apps) for long-horizon agentic work, plus computer use, science, and document work. Not a successor language for GPT-5.6 Sol/Terra/Luna (all remain on sale) — a new family entry.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses API), Microsoft Azure, Amazon Bedrock, ChatGPT Plus/Pro/Business/Enterprise (usage in existing allowances; GPT-6 Astra Pro tier for paid plans). Codex supports experimental cross-context notes.
- **Release / knowledge:** released 2026-09-03; knowledge cutoff 2026-04-30 (OpenAI model page).
- **IDs:** `openai/gpt-6-astra` (gateway routes) / `gpt-6-astra` (native).
- **Context window:** 1,050,000 tokens (max input 922,000); max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning yes (efforts low/medium/high/xhigh/max); tool calls yes (terminal, browser/computer use, code interpreter-class tools); JSON/structured outputs. Cyber capabilities gated behind OpenAI's Daybreak program (Critical threshold on ExploitBench).
- **Pricing (as of 2026-10-07):** $10 in / $50 out per 1M for prompts ≤272K input tokens; **above 272K the entire request reprices at $20 / $75**; cache read $1.00, cache write $12.50; Batch/Flex 50% of standard; Fast mode 2× price for up to 2× speed. Paid — no free tier.
- **Architecture:** proprietary sparse Mixture-of-Experts (per third-party ARMES docs; OpenAI discloses no parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (tbench.ai official board, high effort, Codex harness, rank 1/18, ±1.8) / 88.4% (AA, max) / 87.3% (vals.ai).
- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (Artificial Analysis) / 58.2% (rank 4/59, LLMLearner).
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI, new high) / **68.1%** (rank 1/20).
- OSWorld 2.0 computer use: **72.6%** (OpenAI; ~47% less time per task than Sol); ScreenSpot-Pro 92.7%.
- AutomationBench: **41.4%** (OpenAI; ahead of Fable 5.1 31.4% and Opus 5 26.9%).
- GDPval-AA: no verified public score found for Astra. Tau3/Tau2 / Claw-Eval / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI) / **96.1–96.3%** (AA, extra-high, rank 1/189).
- HLE: **54.7%** no tools (AA, 2026-09-04) / **57.2%** with tools (OpenAI).
- Artificial Analysis Intelligence Index v4.1.1: **61.2** (vs Fable 5.1 65.7, Opus 5 63.1).
- ARC-AGI-2: **95.0%** (max, arcprize.org); ARC-AGI-3: 99.9% under OpenAI's adapter harness, **62.7%** on the standardized harness.
- FrontierMath Tier 4 v2: 97.6% no tools / 93.7% with tools (rank 1); CritPt 31.7 (rank 4/124); LiveBench / LCR / Omniscience: no verified public score found.

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI) / 74.0% (Datacurve board, xhigh, tied for first).
- Terminal-Bench 2.1/4.0 as above; FrontierCode 1.1 Main **53.3%**, Extended **64.5%**; FrontierSWE v2 65.5%.
- SciCode: **56.5%** (max, no tools, rank 16/89); Vibe Code Bench v1.1: **89.6%** (rank 6/63).
- AA Coding Agent Index v1.4: **67.0** (vs Opus 5 68.1, Fable 5.1 67.2). SRE-Bench 88.0%; IOI (Vals v2) 100.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no published OpenAI figure** — OpenAI quotes DeepSWE instead; no like-for-like SWE-bench row exists.

Long context:

- OpenAI MRCR v2 8-needle: **100%** at 256K–512K and **96.3%** at 512K–1M (vs GPT-5.6 Sol 91.5% / 73.8%).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 87.4–88.4 at/near the ~88 frontier ref (rank 1 board), TB4.0 57.9–59.1 leading, OSWorld 72.6%, AutomationBench 41.4% all frontier-grade; capped below 95 by the missing GDPval-AA and Tau3/Claw-Eval numbers.
- **Reasoning: 96/100.** All four methodology frontier refs cleared — GPQA 96.0–96.3 (90+), HLE 54.7 no-tools (40+), AA Index 61.2 (60+), MRCR 96.3–100 at 512K–1M (95+ to 1M); ARC-AGI-2 95.0 and FrontierMath Tier 4 97.6 corroborate. Not 100 because HLE trails Fable 5.1 and AA Index is below Fable/Opus.
- **Context window: 98/100.** 1.05M window with 100% MRCR at 256K–512K and 96.3% at 512K–1M — just under the ≥98% bar at the top band for a clean 100.
- **Multimodal: 68/100.** Text + image in, text out only = 60–70 band; no video/audio/PDF input and no non-text output.
- **Coding: 94/100.** DeepSWE 74.1 (74%+ frontier ref), TB2.1 rank 1 at 87.4, SciCode 56.5 (55%+ ref), Vibe 89.6, FrontierCode Extended 64.5; capped at 94 because OpenAI published no SWE-bench Verified/Pro or LiveCodeBench row and AA Coding Index 67.0 sits just under the 70+ ref.
- **Cost efficiency: 30/100.** $10/$50 is the methodology's $10/$50 = 30 anchor exactly; the 272K pricing cliff (whole-request $20/$75 above it) and $1.00 cache reads (4× Fable 5.1's) hurt agentic workloads, batch/flex at half price is the only offset.
- **Overall Score: 90/100.** (92+96+98+68+94)/5 = 89.6 → 90 — top-of-field reasoning/long-context/computer-use flagship for customers who need SOTA and will pay $10/$50 (and keep prompts under 272K).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post + model docs, DataCamp, LLMLearner, The Model Gap, UseRightAI, Techplained, Modelscale, tbench.ai/AA/vals cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
