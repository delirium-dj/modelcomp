- Source: Moonshot AI/Kimi K2.7 Code
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's 2026-06-12 open-source coding-specialist model, tuned for long-context programming, instruction following and long-horizon tasks, with over-thinking suppression that cuts average token use ~30%. A distinct model; the 2026-06-15 **Highspeed** variant is a serving profile (5–6x faster, 2x price), and `kimi-k2.7-code-highspeed` is a deleted phantom serving-profile folder per the project identity roster.
- **Provider / access:** Open weights; Kimi Code Beta, Kimi API and Kimi Business. Coinbase set K2.7 Code and GLM-5.2 as default models for all engineers in June 2026, nearly halving AI spend; Tencent CodeBuddy Code 2.0 integration in the generation.
- **Release / knowledge:** 2026-06-12 (Highspeed 2026-06-15); knowledge cutoff: no verified public score found.
- **IDs:** `kimi-k2.7-code`. No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** text and code in, text/code out; long-context programming, code review, documentation summarisation, vulnerability discovery; thinking mode mandatory (per secondary launch coverage). No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **¥13 / 1M input, ¥54 / 1M output, ¥2.6 / 1M cached input** for the Highspeed variant (DoNews, secondary); standard tier cheaper. Open weights allow free self-hosting.
- **Architecture:** MoE, **1.1 trillion total / 32B active** parameters (secondary OSCHINA coverage; Baike gives 1.1T total). Open weights.

### Raw benchmarks found

Agent / tool use:

- Three coding benchmarks: average **+21%** over K2.6 (secondary OSCHINA); individual benchmark gains **10%–31.5%** (secondary CSDN)
- Average token consumption **−30%** vs K2.6, with over-thinking suppression (Baike)
- Highspeed output: **~180 tokens/s** in normal coding, up to **260 tokens/s** at short context — **5–6x** the standard variant (Baike / DoNews)
- Anthropic (2026-06-30) noted K2.7 can achieve the vulnerability-discovery capability of its own models (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Improved results on benchmarks it was not specially trained for (directional, no numbers)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Three coding benchmarks average **+21%** over K2.6; gains of **10%–31.5%** on individual benchmarks (secondary, exact scores not published in the retrieved excerpts) — no verified public absolute score found
- Long-context programming and 30%-lower token use as above
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K window optimised for long-context coding with context-efficiency gains; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** A 21% average coding-benchmark gain, 30% fewer tokens, 180–260 tok/s highspeed serving, and production adoption at Coinbase for code review and docs; capped by no scored agent harness and the gains being relative/secondary.
- **Reasoning: 82/100.** Over-thinking suppression and gains on untrained benchmarks; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 85/100.** A verified 256K window purpose-built for long-context programming with 30% token savings; capped by being 1/4 of the 1M class and no retrieval benchmark.
- **Multimodal: 76/100.** Scored conservatively: the retrieved sources document a text/code-only coding specialist, with no verified image/audio/video input.
- **Coding: 90/100.** Coding-specialist design with a 21% average benchmark gain over K2.6, 10%–31.5% individual gains, and a 1.1T/32B MoE; capped by no published absolute SWE-bench / Terminal-Bench number.
- **Cost efficiency: 92/100.** Free open weights, 30% fewer tokens, ¥2.6 cached input and a ~50% AI-spend reduction at Coinbase; capped by the Highspeed 2x surcharge. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 88, 82, 85, 76, 90 = 84.2 → 84. Best fit: high-volume, long-context agentic coding and code review on self-hosted open weights.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi K2.7 Code article retrieved via public web search excerpt (release, 1.1T params, 256K context, −30% tokens, Highspeed speeds, Coinbase adoption), the Baidu Baike Highspeed-variant excerpt, and secondary OSCHINA / CSDN / DoNews launch coverage for the 32B active params, +21% average / 10%–31.5% individual benchmark gains and the ¥13/¥54/¥2.6 rate card — all labelled secondary. The Highspeed variant is treated as a serving profile, not a separate model; per the project's generated roster `kimi-k2.7-code-highspeed` is a deleted phantom folder and is never scaffolded or written. Relative gains are never converted to absolute scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Kimi K2.7 Code — 百度百科 (retrieved via search excerpt; specs, token savings, Highspeed, adoption)](https://baike.baidu.com/item/Kimi%20K2.7%20Code/67986864)
  - [Kimi K2.7 Code 模型高速版 — 百度百科 (retrieved via search excerpt; speed figures)](https://baike.baidu.com/item/Kimi%20K2.7%20Code%20模型高速版/68035964)
  - [Kimi K2.7 Code 上线 — OSCHINA (secondary benchmark gains, architecture)](https://my.oschina.net/u/9487999/blog/19704840)
