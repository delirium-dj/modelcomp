# MAI-Code-1.1-Flash — findings by Ling 3.1 Flash

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's small-tier agentic coding model for GitHub Copilot. Successor to MAI-Code-1-Flash on the MAI-Thinking-1 base: adds native vision (image/PDF input for image-to-code), better coding quality, instruction following, and tool use, at 73% lower list price. Optimized for native VS Code and Copilot CLI integration; also runs locally on supported devices with no per-inference charges for local calls.
- **Provider / access:** GitHub Copilot (production VS Code-based harness); OpenCode Zen `opencode/mai-code-1.1-flash` (no Free ID — `noFreeId` in curated meta).
- **Release / knowledge:** Released 2026-08-11 (1.0 generation: 2026-06-02); knowledge cutoff not stated.
- **IDs:** `opencode/mai-code-1.1-flash` (Zen, paid); Copilot picker ID not separately published for 1.1.
- **Context window:** 256,000 total / 128,000 max output (curated meta.json; the 1.0 card confirms the 256K family context) — verified against meta and the 1.0 model card.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking by task complexity, per 1.0 card); tool calls yes (Copilot production harness); JSON mode / tool use per 1.0 card.
- **Pricing (as of 2026-10-10):** $0.20 / 1M input, $1.20 / 1M output (GitHub Copilot list), cached input $0.02 / 1M; 73% lower list price than MAI-Code-1-Flash ($0.75/$4.50 on Foundry); Copilot annual subscribers charged at a 0.25× premium request multiplier.
- **Architecture:** sparse-MoE transformer; 137B total / 5B active per the MAI-Code-1-Flash card — the 1.1 parameter count is not separately published (same MAI-Thinking-1 base family); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (GitHub Copilot production VS Code harness, 2026-08-11 model card; 17.0K avg tokens/task; vs GPT 5.4 mini 60.7%, Haiku 4.5 49.4%)
- SWE-bench Verified: **72.6%** (same harness; 8.6K avg tokens/task — lowest in class vs GPT 5.4 mini 69.2%/9.4K, Haiku 4.5 69.8%/20.9K)
- Text2WebApp (internal web-app dev): **74.1%** (17.1K tokens; vs Haiku 4.5 11.5%, GPT 5.4 mini 58.3%)
- ScreenShot2WebApp (internal): **42.1%** (10.5K tokens; vs GPT 5.4 mini 39.3%, Haiku 4.5 10.0%)
- Vision2Web Level3: **11.5%** (15.1K tokens; vs Haiku 4.5 13.7%, GPT 5.4 mini 10.1%)
- SWE-bench Pro: **51.2%** (MAI-Code-1-Flash card, 2026-06-02 — provisional proxy for the 1.1 generation; vs Claude Haiku 4.5 35.2% in the same Copilot harness)
- τ³-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (MAI-Code-1-Flash card generation, observed 2026-06-07; third-party re-eval 2026-10-09 — provisional proxy; the 1.1 card explicitly defers general benchmarks to the 1.0 card)
- HLE: no verified public score found (listed in the 1.0 card's evaluation plan, no value published)
- LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **72.6%** (direct — see tool use)
- Terminal-Bench 2.1: **62.9%** (direct — see tool use)
- Terminal-Bench 2.0: **54.8%** (1.0 card — provisional proxy)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No long-context retrieval reported (256K window; no MRCR / RULER / GraphWalks number) — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.1 62.9% and SWE-bench Verified 72.6% in the Copilot production harness are mid-band (TB ~45–60% maps to 50–70); no τ³-Banking, GDPval-AA, MCP-Atlas, or Toolathon numbers are published, and Vision2Web Level3 11.5% is weak.
- **Reasoning: 70/100.** Proxy evidence only: GPQA Diamond 84.6% from the 1.0/MAI-Thinking-1 base sits above the 60–80% mid band but below the 90%+ frontier; the 1.1 card publishes no HLE, LCR, CritPt, or Intelligence Index number, capping confidence.
- **Context window: 71/100.** 256K total / 128K out — the 200K–500K band (65–84), just above the 200K = 70 anchor.
- **Multimodal: 65/100.** Native image + PDF input for image-to-code (Text2WebApp 74.1%, ScreenShot2WebApp 42.1%) but text-only output and a weak Vision2Web Level3 11.5% — top of the +image band, below the video/PDF band.
- **Coding: 78/100.** SWE-bench Verified 72.6% with the lowest token usage in its class (8.6K vs 9.4K–20.9K) and TB 2.1 62.9% are strong for a small tier; no DeepSWE, SciCode, or LiveCodeBench numbers published.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M with $0.02 cached input — 73% below MAI-Code-1-Flash's $0.75/$4.50; local Copilot runs are free; the 0.25× premium multiplier applies to annual Copilot subscribers.
- **Overall Score: 70/100.** Mean of Tool 66, Reasoning 70, Context 71, Multimodal 65, Coding 78 = 70.0. Best-fit: cheap vision-capable Copilot coding engine for everyday SWE and image-to-code; not a general reasoning or long-context pick.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Microsoft AI MAI-Code-1.1-Flash model/data cards 2026-08-11, GitHub changelog 2026-08-11, MAI-Code-1-Flash model card 2026-06-02, llmreference/llmboard listings, curated meta.json); scores are normalized 1–100 interpretations, not official vendor scores. GPQA 84.6%, SWE-bench Pro 51.2%, and TB 2.0 54.8% are 1.0-generation proxies, marked provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
