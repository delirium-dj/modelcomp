# Qwen 3.8 Flash Next — findings by MiMo 2.6 Flash

- Source: Alibaba / Qwen (`Qwen/Qwen3.8-Flash-Next` open weights; experimental Qwen4-architecture preview)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next — the **experimental open-weight checkpoint** behind the managed `qwen3.8-flash` (official card: "Qwen3.8-Flash is the official version based on Qwen3.8-Flash-Next with more production features, e.g., 1M context by default, official built-in tools"). First release under the architecture previewed for **Qwen4** (HF tag `qwen4_exp`).
- **Short description:** 125B-param language model with only **6B activated** (512 experts, 10 routed + 1 shared) plus **51B n-gram embedding** and 4B MTP (~180B stored, BF16). New-for-this-generation components: Gated DeltaNet + **Qwen Sparse Attention** (micro-block-level selection, cuts long-context latency), **Gated Residual** streams, **N-gram Embedding** (20M bigrams/trigrams at layer 2), Muon+AdamW with refitted scaling laws (no batch warmup). Thinking mode default (`reasoning_effort` xhigh default; `enable_thinking`/`preserve_thinking` controls, preserved-thinking default for agent consistency). Trained ~1/9 the compute of Qwen3.7-Plus while beating it across suites (vendor).
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, 6.01k likes, ~1.61M monthly downloads, 370 quant builds) under **qwen-community-1.0** license; hosted via Qwen Cloud and gateways (Vercel AI Gateway **$0.12/$0.40** per 1M per repo meta; BenchmarkList/OpenRouter quote $0.16/$0.47 for the managed family); vLLM/SGLang/TokenSpeed recipes official.
- **Release / knowledge:** released **2026-08-26** (qwen.ai launch blog; HF collection updated Aug 26; tech report Aug 2026). Knowledge cutoff not published.
- **Context window:** **262,144 native** (256K), extensible to **1,000,000 with static YaRN** (official config factor 4.0; docs warn static YaRN can hurt shorter-text quality — apply only when needed). Suggested serving maxes: 262,144 reasoning + 131,072 response tokens.
- **Modalities:** **text, image, video in**; text out (HF `image-text-to-text`, official image/video API examples); reasoning yes; tool use yes.
- **Pricing (as of 2026-10-07):** Vercel $0.12 in / $0.40 out per 1M (repo meta); open weights → self-host at electricity cost; no Free ID (`noFreeId: true`).
- **Architecture:** see above; sibling deltas vs managed: no hosted 1M default, no hosted built-in tools.

### Raw benchmarks found

> Primary: official HF model card (Qwen-run tables, released 2026-08-26) + BenchmarkList
> (31 independent rows: AA runs dated 2026-09-02…10-03, launch-post rows, verified corpora).
> Where vendor and AA disagree, both are shown. Eval harnesses: Claude Code / mini-SWE-agent,
> temp 1.0, 256K window unless noted.

Tool / agent use:

- GDPval-AA (AA-run, Elo): **1,743** — 10/352, **97th pct** (field leader Claude Opus 5: 1,861).
- AA-Briefcase (AA-run, Elo): **1,583** — 10/145, 94th pct; rubric pass 54.1% (leader O-5.5: 1,822).
- Tau3-Banking (AA-run): **45.4%** — 10/176, 95th pct (leader GLM-5.3: 50.3).
- Toolathlon Verified (Pass@1): **73.5%** — 17/41, 60th pct (leader O-5: 80.6).
- AndroidWorld: **84.5%** — 6/22, 76th pct (beats Opus 4.6's 62.0 in-vendor); OSWorld 2.0: binary **19.4** / partial 52.3 — 16/24, 35th pct (leader O-5: 75.4 binary).
- JobBench: 55.7% (11/48, 79th pct); CoWorkBench (Qwen in-house): **73.9** (best in vendor row); CorpBench Work 1.3: 62.9 — 13/16, **20th pct** (weak); Agents' Last Exam pass@1 **24.3** — 23/41, 45th pct (leader G-6 Astra: 59.3).
- ClawEval-MM: 64.4 pass@3 / 60.4 avg (5/12); RecreationBench (in-house): 49.9; Vision2Web: 64.0 (4/9).

Reasoning / knowledge:

- GPQA Diamond: **91.7** (vendor) / **92.3** (AA-run, 19/468, 96th pct) — **clears the 90+ ref on both readings**.
- Humanity's Last Exam: **35.9** (vendor, GPT-4o judged) / **38.0** (AA-run, 48/478, 90th pct) — both **under the 40 ref** (leader O-5.5: 67.7).
- AA Intelligence Index: **39.8** — 56/427, 87th pct (leader Fable 5.1: 65.7) — **under the 60 ref**.
- AIIQ composite: 113 — 66/147, 55th pct (abstract 92 / math 103 / academic 130 / programmatic 137 / comp-use 103 / reliability 115).
- IFBench: 81.3 — 7/39, 84th pct; ARC-AGI/AIME: no row found.

Coding:

- LiveCodeBench v6: **91.9%** — 3/50, 96th pct (**field leader** on BenchmarkList's official LCB board).
- Terminal-Bench 2.1 (AA-run): **86.1%** — 17/194, 92nd pct — **clears the 85 ref** (leader Fable 5.1: 91.4).
- SWE-bench Pro: **62.5%** (vendor, Claude Code harness; 20/58, 67th pct) — beats Opus 4.6 Max 53.4, Qwen3.7-Plus 55.8.
- SWE-bench Multilingual: **81.0%** (8/49, 85th pct); NL2Repo: 48.1 (15/34); DeepSWE 1.1: **58.7** (31/52, 41st pct — **under the 74 ref**); SciCode: **50.6** (AA-run, 83rd pct — **under the 55 ref**).
- Arena AI WebDev / LMArena WebDev: 1622.28 Elo (9/105 & 9/27, 92nd pct); SWE-bench Verified: not published.

Long context:

- AA-LCR: **79.7%** — 49/408, **88th pct** (leader Kimi K3: 88.7) — independent retrieval evidence at the native window; no needle/MRCR row at the YaRN-extended 1M.

Multimodal (Qwen-run unless noted):

- RealWorldQA: **88.5** — rank 1/31 on BenchmarkList (100th pct); MathVision: **90.6** w/o CI, **95.7** with CI (9/170, 95th pct); CharXiv-RQ: 84.6 w/o CI, 90.6 with CI (11/35).
- ERQA embodied: **72.3** — 3/20, 89th pct; LVBench (2-hour video): 76.6 — 12/49, 77th pct; ClawEval-MM 64.4 as above.
- Audio input: none (text/image/video only); no PDF-native rows.

### Normalized scores (1–100)

- **Tool use: 85/100.** Top-decile trio from AA (GDPval 1,743 / Briefcase 1,583 / Tau3 45.4), TB2.1 86.1 clearing the ref, AndroidWorld 84.5, Toolathlon 73.5, CoWork 73.9 — held down by OSWorld 2.0 binary 19.4 (35th pct), CorpBench 13/16 (20th pct), ALE pass 24.3 (45th pct), and no MCP-Atlas row.
- **Reasoning: 81/100.** GPQA 91.7/92.3 clears the 90+ ref twice (vendor + AA); but HLE 35.9/38.0 sits just under 40, AA Index 39.8 under 60 (both at 87–90th pct — high mid-tier, not elite), AIIQ 113 mid-pack, no ARC-AGI row.
- **Context window: 91/100.** 262,144 native = 256K tier floor (90) with the best-in-tier independent retrieval proof — AA-LCR 79.7% (88th pct) — earning +1; YaRN→1M is documented but static-scaling caveat applies and no retrieval row exists at 1M.
- **Multimodal: 86/100.** Text + image + video in → 75–90 band; RealWorldQA ranked #1 of 31, MathVision 90.6/95.7, CharXiv 84.6/90.6, ERQA 72.3, LVBench 76.6, AndroidWorld 84.5 — capped at 86 by no audio input, no PDF rows, and no video-reasoning suite beyond LVBench.
- **Coding: 83/100.** LCB 91.9 (board field leader) + TB2.1 86.1 both clear refs, SWE-ML 81.0 and SWE-Pro 62.5 solid; DeepSWE 58.7 misses the 74 ref by 15, SciCode 50.6 misses 55, NL2Repo 48.1 mid, no SWE-bench Verified row.
- **Cost efficiency: 95/100.** $0.12/$0.40 on Vercel + free Qwen-Community weights (self-host/quant to ~75 GB RAM) — frontier-band LCB/TB2.1 at pennies; only the absence of a documented free API tier and static-YaRN serving caveats keep it below 96.
- **Overall Score: 85/100.** (85+81+91+86+83)/5 = 85.2 → 85 — the open Qwen4-architecture preview: field-leading LiveCodeBench, top-decile GDPval/Briefcase/Tau3, and #1 RealWorldQA at $0.40/M output, with HLE/AA-Index refs missed, a sub-74 DeepSWE, and OSWorld2.0/CorpBench soft spots.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — official Hugging Face model card (full vendor benchmark tables, architecture, YaRN guidance), BenchmarkList (31 independent rows incl. AA-run GPQA/HLE/AA-Index/LCR/GDPval), Qwen launch blog reference, qwen.ai Cloud docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
