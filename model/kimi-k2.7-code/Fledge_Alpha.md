# Kimi K2.7 Code — findings by Fledge Alpha

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's June 12, 2026 coding-focused open-weight MoE, built on K2.6 with 30% lower reasoning-token usage per task; same weights as the HighSpeed SKU at half the price.
- **Provider / access:** Kimi API (`kimi-k2.7-code`), OpenRouter (`moonshotai/kimi-k2.7-code`), HF (`moonshotai/Kimi-K2.7-Code`, Modified MIT).
- **Release / knowledge:** 2026-06-12.
- **IDs:** `moonshotai/Kimi-K2.7-Code`
- **Context window:** 262,144 tokens; 131K max output (256K per vals.ai listing).
- **Modalities:** Vision-capable (MoonViT 400M) with text output; thinking mode always on (cannot be disabled).
- **Pricing (as of 2026-10-02):** $0.95/M in, $0.19/M cache, $4/M out; HighSpeed variant doubles each tier.
- **Architecture:** ~1T MoE, 32B active, 384 experts/61 layers, MoonViT vision; Modified MIT open weights, ~595 GB disk, INT4-friendly.

### Raw benchmarks found

Third-party:

- SWE-bench Verified: **78.20%** (vals.ai, open-weight #1 at launch; tied with Claude Opus 4.6 Thinking and GPT 5.4 xhigh)
- Terminal-Bench 2.1: **67.04%** (vals.ai, open-weight #1 at launch per the same June 13 update)
- LiveCodeBench: **82.05%** (#8 among open-weight models at launch)
- Vibe Code Bench: **47.21%** (#3 open-weight at launch)
- MCP Mark Verified: **81.1** (direct row from the launch)

Vendor-only (Moonshot proprietary suites — flagged):

- Kimi Code Bench v2: **62.0** (vs K2.6 50.9, +21.8%)
- Program Bench: **53.6** (vs 48.3, +11.0%)
- MLS Bench Lite: **35.1** (vs 26.7, +31.5%)
- Kimi Claw 24/7 Bench: **46.9** (vs 42.9)

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Mark Verified 81.1 edges Opus 4.8's 76.4 on that suite; no public Terminal-Bench row published by independent verifiers beyond vals.ai's 67.0.
- **Reasoning: 68/100.** No independently run GPQA/HLE/MMLU row published for this checkpoint; capability assumed to track K2.6 (GPQA 90.5% class) — cap reflects missing public reasoning row.
- **Context window: 62/100.** Hard 256K window; same as K2.6, well below the 1M-class flagship tier.
- **Multimodal: 80/100.** MoonViT 400M present on the same stack; no separate publication MMMU-class row.
- **Coding: 80/100.** SWE-bench Verified 78.20% (vals.ai) ties Claude Opus 4.6 Thinking at launch — the headline number plus Terminal 2.1 67.04% opens-weight #1.
- **Cost efficiency: 82/100.** $0.95/$4 with ~30% lower thinking tokens per task and MIT-licensed self-host path.
- **Overall Score: 73/100.** Half-up mean of the five non-cost dims: (76+68+62+80+80)/5 = 73.2 → 73.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (vals.ai June 13 update, DigitalApplied launch guide, eesel/felloai/marktechpost coverage, Moonshot forum post, awesomeagents spec card); vendor-only rows are flagged.
- Future sources: add a new file next to this one using the same headings.
