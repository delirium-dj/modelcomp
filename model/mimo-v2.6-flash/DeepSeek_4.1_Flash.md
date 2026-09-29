# MiMo V2.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Provenance note:** re-written 2026-09-29 after a concurrent external process removed this file from the working tree.

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** The small sibling in Xiaomi's MiMo V2.6 series — a 309B/15B sparse MoE that AA ranks **#8 of 116** on intelligence while sitting **#6 of 116** on cost. AA's summary: "amongst the leading models in intelligence and reasonably priced" — but "notably slow and very verbose."
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-flash`; one serving provider per AA). Weights open on Hugging Face (collection `XiaomiMiMo/mimo-v26`). **A free route exists:** OpenCode Zen carries `mimo-v2.6-flash-free` (live check 2026-09-29).
- **Release / knowledge:** AA dates the model **2026-09-21**; the V2.6 series page is dated 2026-09-22. Knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash`, `mimo-v2.6-flash`, `mimo-v2.6-flash-free`. The Pro sibling has **no** Zen Free ID — do not conflate the two.
- **Context window:** **1M tokens** (AA: 1.0M; llm-stats records 1,048,576 for the family). Max output not published.
- **Modalities:** **text and image input; text output only** (AA technical specifications) — a real capability cut versus Pro, which also takes speech and video. Reasoning: yes.
- **Pricing (as of 2026-09-29):** **$0.14 / 1M in, $0.28 / 1M out** (Xiaomi API), 98% cache discount, blended **$0.06 / 1M** at 7:2:1 and **$0.06 per AA Index task** — **#6/116 on cost**. Vendor states V2.6 inherits V2.5 pricing; the Zen `-free` tier is $0.
- **Architecture:** sparse MoE, **309B total / 15B active**, **MIT licence**; shares the 6-day live-RL story and 7k+ RL-environment open-source release with Pro.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index **38** — **#8 of 116** open-weights, well above the class median of 18. The v4.3.2 composite embeds GDPval-AA v2.1, AutomationBench-AA, TB4.0 and AA-Briefcase, so agentic capability is captured only inside the composite here.
- The vendor claims the series "has achieved performance on most Agent Benchmarks"; **no Flash-specific agentic row (TB2.1/TB4.0, OSWorld, Toolathlon, GDPval Elo, AutomationBench) was extractable — no verified score for Flash.**
- No Claw-Eval, MCP-Atlas, SWE Atlas or JobBench number found.

Reasoning / knowledge:

- AA Intelligence Index **38** (#8/116; median 18), reasoning mode confirmed. **No separately published GPQA/HLE/CritPt/LCR value — no verified score outside the composite.**

Coding:

- Visible only through the composite (SciCode, TB4.0). **No Flash-specific SWE-bench, DeepSWE, LiveCodeBench, SciCode or Terminal-Bench row published or extracted — no verified score.**
- The only published coding-adjacent deltas describe the **9B Distill-Qwen sibling** (SWE-bench Verified 61.1 → 66.2, MiMo Cyber Bench 31.3 → 47.0, TB2.1 37.1 → 52.8, MiMo Visual Coding 64.0 → 72.4) — a different checkpoint, **not counted here.**

Long context / serving:

- 1M window verified by AA; **no MRCR/RULER/GraphWalks retrieval accuracy published.**
- **55.4 tokens/s** (#44/116) and TTFT **4.23 s**; verbosity is a hidden cost — **240M output tokens** on the Index versus a 140M class median ("very verbose"). Only one serving provider is tracked, plus the `-free` Zen tier.

### Normalized scores (1–100)

- **Tool use: 78/100.** #8-of-116 open-weights intelligence with an agentic-heavy composite implies solid agent capability at 309B/15B, but **zero Flash-specific agentic rows exist** to calibrate against.
- **Reasoning: 80/100.** Index 38 is strong for a 15B-active model and clears the class median widely; no GPQA/HLE number exists and 38 is short of the 60+ frontier reference.
- **Context window: 95/100.** 1M tokens at the floor of the ≥1M tier (95–100); no retrieval proof at 512K+ and no published max output.
- **Multimodal: 65/100.** Text and image in with text out only is exactly the "+image in = 60–70" band — and a deliberate cut versus Pro's speech/video input.
- **Coding: 78/100.** Visible only through the composite plus sibling-distill deltas, with no Flash-specific coding row anywhere.
- **Cost efficiency: 95/100.** $0.14/$0.28, 98% cache discount, $0.06 blended and **$0.06/Index task (#6/116)** sit between the ~$0.10/$0.20 ≈ 97–99 band and the ~$0.60/$2.20 ≈ 92 anchor; heavy verbosity is the only thing keeping this off the top.
- **Overall Score: 79.2/100.** (78 + 80 + 95 + 65 + 78) / 5 = 79.2. Best fit: cheap high-volume long-context ingestion and drafting where a 1M window at $0.06/Index-task matters more than multimodal breadth or measured agentic depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research (Artificial Analysis MiMo-V2.6-Flash page — Index 38 #8/116, 55.4 t/s, TTFT 4.23 s, $0.14/$0.28, 98% cache discount, $0.06/task, 309B/15B, MIT, 1M context, text+image in only, 240M-token verbosity, single provider; Xiaomi MiMo V2.6 release page 2026-09-22 — series pricing parity, open-source release, Distill-Qwen-9B RL deltas; OpenCode Zen live catalogue 2026-09-29 — `mimo-v2.6-flash-free` exists, no Pro free ID). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
