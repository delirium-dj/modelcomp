# DeepSeek V4.1 Flash — findings by Qwen 3.8 Max

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** An **open-weight (MIT) 552B MoE** from DeepSeek that became the lab's served flagship on 2026-09-10 — a *cheaper* model that DeepSeek says "comprehensively surpassed" its ~4x-more-expensive V4 Pro, which it retired on 2026-09-14. It is a genuine fresh pretrain (not a patch) built on a new **Causal Encoder-Decoder (CED)** backbone with aggressive **FP4 KV-cache compression**, aimed squarely at **short-horizon, high-volume agent loops** where cost-per-task dominates. On DeepSeek's own model card it beats/matches GPT-5.6 Sol and Claude Opus 5.0 on several agentic-coding benchmarks, but trails them decisively on long-horizon, repo-scale and offensive-security work.
- **Provider / access:** DeepSeek API as `deepseek-flash` (bases `api.deepseek.com` and `api.deepseek.com/anthropic`; compatible with **both OpenAI and Anthropic request formats**). MIT weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`) — self-host/fine-tune/serve commercially royalty-free. Responses API native; partners WorkBuddy/CodeBuddy and OpenCode day one; DeepSeek Harness (own agent scaffold) shipped in developer preview at launch. The retired `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp` and (from 04:00 UTC 2026-09-14) `deepseek-v4-pro` aliases all now route to V4.1 Flash at Flash prices until V4.1 Pro ships.
- **Release / knowledge:** Released **2026-09-10** (Beijing time; pricing effective 04:00 UTC same day). V4.1 Pro is confirmed coming but has **no published card, scale, price or date**. Knowledge cutoff not disclosed in the sources reviewed.
- **IDs:** `deepseek-v4.1-flash` / `deepseek-flash`; weights `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** **1,000,000 tokens** with up to **384,000 output** (a larger output ceiling than GPT-5.6/GPT-5.5's 128K). FP4 KV cache = ~890 bytes/token (~1/4 of V4 Flash, ~1/437 of DeepSeek V1) → a full 1M window is ~0.9 GB global KV; SWA Bounded Replay cuts persistent cache to ~1/8 of V4 Flash. Concurrency 2,500 (vs V4 Pro's 500).
- **Modalities:** text + **image** in (native DeepSeek-ViT — no separate Vision-Exp model) → text out; **no audio/video**. Reasoning on by default with a **continuous `reasoning_effort` dial 1–100** (published scores use 100); JSON + function calling supported.
- **Pricing (as of 2026-10-23):** per 1M tokens — **peak $0.30 input (cache miss) / $1.20 output**, **off-peak $0.15 / $0.60**; cache **hits $0.006 peak / $0.003 off-peak**. Peak windows 01:00–04:00 and 06:00–10:00 UTC weekdays (the Chinese business day). ~4.1x cheaper than the V4 Pro it replaced; a 2M-in/200K-out agent run ≈ **$0.42 off-peak**.
- **Architecture:** 552B-backbone MoE, **8B active (prefill) / 16B active (decode)** per token; 40-layer CED (20 causal encoder + 20 decoder, decoder global KV projected from encoder final states); Compressed Sparse Attention 2 (CSA2, Full/Reindex/Reuse modes); 1 shared + 384 routed experts, 6 routed active/token; 196B sparse **Engram** conditional memory; FP4 (E2M1) KV cache; Single-Pass mHC + DSpark decoding. Trained from scratch on **45T tokens** (context extended to 1M at the 34T mark); post-training SFT + RL + on-policy distillation, with agentic gains credited to large-scale synthetic agent-task/environment generation.

### Raw benchmarks found

Agent / tool use & coding (DeepSeek **official model card, vendor-run, at max reasoning effort** — comparison columns also vendor-run in DeepSeek's internal harness):

| Benchmark | GPT-5.6 Sol | Claude Opus 5.0 | **V4.1 Flash** |
| --- | --- | --- | --- |
| DeepSWE v1.1 (real GitHub issues) | 73.0 | 74.0 | **74.2** |
| Terminal-Bench 2.1 | 88.8 | 89.1 | **90.6** |
| AutomationBench (workflow automation) | 45.8 | 50.3 | **54.8** |
| Agent's Last Exam (agentic reasoning) | 26.7 | 28.6 | **31.8** |
| CyberGym (cybersecurity) | 84.5 | not reported | **88.1** |
| HLE with tools | not reported | 63.6 | **63.9** |
| Terminal-Bench 3.0 (long horizon) | — | **43.3** | 30.0 |
| Terminal-Bench 4.0 (long horizon) | 39.9 | **51.8** | 31.2 |
| ProgramBench (Almost@1) | 23.0 | **37.0** | 20.3 |
| NL2Repo-Bench (repo-level coding) | 56.8 | **75.3** | 64.0 |
| SEC-Bench Pro | **74.3** | — | 62.8 |
| ExploitGym | **33.7** | — | 15.3 |

Reasoning / knowledge:

- GPQA Diamond **90.9** (below Sol 94.1 and Opus 5.0 93.4); Codeforces rating **3471** (up from V4 Pro 3348); MathArena Apex **65.6** (matches Kimi K3); MMLU-Pro **74.1** (vs V4 Pro 73.5, V4 Flash 68.3)
- HLE **no-tools 36.8** (39.1 text-only) — well below Opus 5.0's 56.3 and Sol's 44.5; a clear reasoning weakness
- **Artificial Analysis: Intelligence Index 40 at max effort, ~190 tokens/sec** (the only independent-harness intelligence signal found)

Coding (base-model notes): HumanEval **79.4** (vs V4 Pro 76.8, V4 Flash 69.5). **Scaffold-sensitive:** DeepSWE 74.2 (mini-SWE) = 72.6 (DeepSeek Harness Minimal) = 65.6 (Codex); Terminal-Bench 2.1 90.6 (Minimal) / 90.3 (mini-SWE) / 84.1 (Codex).

Multimodal: MMMU-Pro **56.5**, CVBench **77.9**, DocVQA **95.6**, RefCOCO **86.0** — strong document/grounding, weak complex multimodal reasoning.

> Provenance: **Every capability number above is DeepSeek vendor-reported** at max reasoning effort, and the Sol/Opus-5.0 comparison columns come from DeepSeek's *own internal harness* — both sources (Ginger Labs 2026-09-15, Flowtivity 2026-09-10/19) explicitly flag "no large independent benchmark yet" and advise treating the exact decimals as vendor-reported. Cross-vendor numbers do not reconcile: DeepSeek's table lists GPT-5.6 Sol at **Agent's Last Exam 26.7**, whereas OpenAI's own GPT-5.6 announcement gives Sol **53.6** — different harness/version, so the ALE row is not comparable to OpenAI's. The single neutral signal is **Artificial Analysis Index 40 (max effort)** — modest and well below frontier (GPT-5.5 ≈ 60, Gemini 3.5 Flash ≈ 55, Qwen3.8-Max ≈ 45); note AA rebased its index basket in 2026, so this mid-Sept figure is not strictly convertible to later AA scores. Per methodology, vendor claims are treated as an upper bound and discounted; the honest pattern (corroborated by both sources) is that V4.1 Flash **dominates short-horizon, high-volume agent loops** while Opus 5.0 / Sol keep **long-horizon terminal work, repo-scale refactors and offensive security**. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 85/100.** Genuinely frontier-competitive on the vendor's short-horizon agentic set — DeepSWE v1.1 74.2 (matches Opus 5.0), AutomationBench 54.8 (beats Opus 5.0 and Sol), Agent's Last Exam 31.8 (beats both), HLE-with-tools 63.9 (edges Opus 5.0) — plus native function calling, Responses API, OpenAI/Anthropic-compatible endpoints and the DeepSeek Harness scaffold. Held below the frontier because it is all vendor-run (no independent confirmation; AA Index only 40) and it **trails badly on the harder long-horizon agent benchmarks** (Terminal-Bench 3.0 30.0 vs Opus 43.3; 4.0 31.2 vs 51.8; ProgramBench 20.3 vs 37.0).
- **Reasoning: 81/100.** Solid-but-mid-pack expert reasoning — GPQA Diamond 90.9 (below Sol 94.1 / Opus 5.0 93.4), a strong Codeforces 3471 and MathArena Apex 65.6, MMLU-Pro 74.1 — but a marked weakness on tool-free reasoning (**HLE no-tools 36.8 / 39.1 text vs Opus 5.0's 56.3**) and the modest independent AA Index (40). Capped accordingly; the vendor framing overstates it relative to the one neutral signal.
- **Context window: 89/100.** A real **1M-token window with a 384K output ceiling** (larger output than GPT-5.6/GPT-5.5's 128K) made economically usable by FP4 KV compression (~890 bytes/token, ~0.9 GB for a full window) and SWA Bounded Replay — excellent for repeated large-repo/agent re-reads and cache hits at $0.003–0.006. Discounted below the 92–93 of verified long-context leaders because **no MRCR-style far-edge recall benchmark is published** and the new backbone "changes behavior," so precision at the 1M edge is unverified.
- **Multimodal: 77/100.** Native DeepSeek-ViT vision on one endpoint (text + image; no audio/video) with strong document/grounding results — DocVQA 95.6, RefCOCO 86.0, CVBench 77.9 — but **MMMU-Pro 56.5 is far below the frontier (~81–83)**, so complex multimodal reasoning is limited and there is no audio/video path.
- **Coding: 86/100.** Outstanding for its class and price: Terminal-Bench 2.1 **90.6** (beats Opus 5.0 and Sol), DeepSWE v1.1 74.2 (matches Opus 5.0), CyberGym 88.1 (beats Sol), HumanEval 79.4, Codeforces 3471. Held below the high-80s because it is **vendor-run and scaffold-sensitive** (Codex harness drops Terminal-Bench 2.1 to 84.1 and DeepSWE to 65.6) and it **loses the long-horizon/repo/security categories** — NL2Repo-Bench 64.0 (vs Opus 75.3), ProgramBench 20.3, SEC-Bench Pro 62.8 (vs Sol 74.3), ExploitGym 15.3 (vs Sol 33.7).
- **Cost efficiency: 96/100.** The headline story and near-unbeatable: **$0.15/$0.60 off-peak** (cache hits $0.003), MIT open weights for royalty-free self-hosting (FP4 KV makes the 552B cheap to serve), 4.1x cheaper than the V4 Pro it replaced, concurrency 2,500, and OpenAI/Anthropic-compatible endpoints for one-line migration. Best-in-class price-to-capability for high-volume agent work; scored but **not** counted in the Overall per methodology.
- **Overall Score: 84/100.** Mean of Tool 85 + Reasoning 81 + Context 89 + Multimodal 77 + Coding 86 = 83.6 → 84. Best fit: **bulk, short-horizon, high-volume agent and coding loops** where cost-per-task dominates — route the many cheap passes here and keep a frontier model (Opus 5.0 / Sol) for the hard ~5% (marathon autonomous sessions, repo-scale refactors, offensive security, tool-free expert reasoning). Independent read: my 84 sits **below the queue's curated 88.4** because I discount the vendor-only frontier-agentic claims (both sources flag "no large independent benchmark yet"), weight the modest independent AA Index (40), and account for the documented long-horizon/security/multimodal-reasoning deficits — an exceptional-value specialist, not a universal frontier-killer.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Ginger Labs' "DeepSeek V4.1 Flash: Benchmarks, Capabilities, and Architecture," 2026-09-15; Flowtivity's "DeepSeek V4.1 Flash Benchmarks," 2026-09-10/updated 09-19; both reproducing DeepSeek's official model card and pricing docs and citing Artificial Analysis for the independent Index/speed). All capability figures are vendor-reported at max effort with DeepSeek-run comparison columns; the sole neutral signal (AA Index 40, ~190 tok/s) is weighted accordingly, and the unreconciled Agent's-Last-Exam harness numbers are flagged. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
