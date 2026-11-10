# MiMo-V2.6 Free — findings by Fledge Alpha

- Source: Xiaomi (free tier of `mimo-v2.6-pro` / alias `xiaomi-mimo-v2.6-pro-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6 Free (`xiaomi-mimo-v2.6-pro-free`, OpenCode Zen `mimo-v2.6-flash-free`)
- **Short description:** Xiaomi's V2.6 series exposed through  free tiers (OpenCode Zen, Kenari, AIHubMix, Token Plan free quota). Same V2.6-Pro weights as the paid `mimo-v2.6-pro` route; no separate capability or benchmark ladder.
- **Provider / access:** OpenCode Zen (free, ~1 week Sep 21 2026; data may be used for training), Kenari free route, AIHubMix `xiaomi-mimo-v2.6-pro-free` (5 req/min · 100/day · 1M tokens/day), Token Plan free quota.
- **Release / knowledge:** Same Sep 2026 MiMo-V2.6 launch window.
- **IDs:** `xiaomi-mimo-v2.6-pro-free`, `xiaomi/mimo-v2.6-pro-free`
- **Context window:** 1,050,000 tokens; 131K max output.
- **Modalities:** Text, vision, audio, video in; text out (same as V2.6-Pro).
- **Pricing (as of 2026-10-02):** $0 within free-tier rate limits (5 req/min/100 req/day/1M tokens/day on AIHubMix; 50% off free Windows on OpenCode Zen was 1 week; Token Plan free quota nested inside $6/month minimum).
- **Architecture:** Identical weights to `mimo-v2.6-pro` (1.02T / 42B active MoE, MIT).

### Raw benchmarks found

- The MiMo-V2.6 Pro card carries the row set; the Free alias is the same model with a throttle, so the published agentic rows carry over verbatim from `../mimo-v2.6-pro/Fledge_Alpha.md`: AA Intelligence Index 46.3, HLE 49.4%, AA-LCR 86.3%, SciCode 60.9%, DeepSWE v1.1 71.9, Terminal-Bench 2.1 89.9.
- The one free-tier-specific third-party test found: Kingy.ai's Sep 21 2026 triple-task OpenCode test — "MiMo-V2.6-Flash Free" passed 21/23 hidden automated checks at $0 vs Opus 5's 23/23 at ~$1.03. Flash swap, not Pro, but it confirms the free tier is functionally the same checkpoint.

### Normalized scores (1–100)

- **Tool use: 85/100.** Same V2.6 checkpoint — inherits Pro's τ²-Bench/AutomationBench rows; rate-limited but unchanged numerically.
- **Reasoning: 79/100.** Same Pro rows (AA Index 46.3, HLE 49.4%).
- **Context window: 95/100.** Same 1.05M window as the paid V2.6-Pro.
- **Multimodal: 90/100.** Same native omni-modal surface (text/image/audio/video in).
- **Coding: 80/100.** Same DeepSWE 71.9 / Terminal 2.1 89.9 vendor rows; the Kingy trial put 21/23 on the free Flash variant.
- **Cost efficiency: 100/100.** $0 within the documented free-tier quotas (AIHubMix 5 rpm/100 rpd/1M tokens/day; OpenCode Zen free promo week ended; Token Plan free band only inside a paid subscription).
- **Overall Score: 86/100.** Mean of the five quality dims. This is the standard scored-report for the Free tier — the matching free window has nominally lapsed, but the alias and rate card still exist on third-party hubs.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenCode Zen community, aihubmix post, kingy.ai Sep 2026 test, anyrouter alias list, mimo.mi.com pricing). Tool/Reasoning/Context/Multimodal/Coding dimensions are the same checkpoint as MiMo-V2.6 Pro; Cost dimension is what moves.
- Future sources: add a new file next to this one using the same headings.
